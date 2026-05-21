import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import ProjectsPageTemplate from "./ProjectsPageTemplate"

const ProjectsPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { edges: posts } = data.allMarkdownRemark

  return (
    <ProjectsPageTemplate
      heading={fm.heading}
      subheading={fm.subheading}
      posts={posts}
    />
  )
}

export default ProjectsPage

export function Head({ data }) {
  const fm = data.markdownRemark.frontmatter
  return <MyHelmet title={fm.title} description={fm.subheading} />
}

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { templateKey: { eq: "project-page" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date
            location
            featuredimage {
              alt
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
    }
  }
`
