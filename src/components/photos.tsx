import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
//import pic1 from "../images/chicken-1.jpg"
//import pic2 from "../images/chicken-2.jpg"
//import pic3 from "../images/chicken-3.jpg"
import photoStyles from "../styles/photos.module.css"

export default function Photos() {
  const data = useStaticQuery(graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 470, maxHeight: 470, quality: 100) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  `)

  return (
    <div id={photoStyles.photos}>
      {data.allImageSharp.edges.map(edge => 
        <Img fluid={edge.node.fluid} fadeIn={true}/>
      )}
    </div>
  )
}

