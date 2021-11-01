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
      }
    }
  }
`
