import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ProductPageTemplate from "./ProductPageTemplate"

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <ProductPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
        team={fm.team}
      />
    </>
  )
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
        team {
          name
          title
          image {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                aspectRatio: 1.5
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
