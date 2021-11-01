import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import AboutPageTemplate from "./AboutPageTemplate"

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  const { frontmatter: fm } = post

  return (
    <>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <AboutPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        html={post.html}
      />
    </>
  )
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
