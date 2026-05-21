import React from "react"
import { graphql, Link } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import { Container } from "../components/Sections"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid"
import ProjectPageTemplate from "./ProjectPageTemplate"

const ProjectPage = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark: project } = data
  const { frontmatter: fm } = project

  return (
    <>
      <ProjectPageTemplate
        location={fm.location}
        title={fm.title}
        date={fm.date}
        image={fm.featuredimage}
        body={project.html}
      />

      {/* Links to previous and next project */}
      <Container>
        <div className="sm:flex sm:justify-between sm:items-center sm:gap-4 border-t py-4">
          {previous && previous.frontmatter.templateKey === "project-page" ? (
            <Link to={previous.fields.slug} className="group">
              <div className="flex items-center gap-x-2 text-gray-500">
                <ArrowLongLeftIcon className="w-5 h-5" />
                Next
              </div>
              <p className="mt-4 uppercase text-blue-700 font-bold text-xs tracking-wide">
                {previous.frontmatter.location}
              </p>
              <h3 className="font-bold text-lg text-gray-700 group-hover:underline">
                {previous.frontmatter.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {next && next.frontmatter.templateKey === "project-page" ? (
            <div className="mt-6 sm:mt-0">
              <Link to={next.fields.slug} className="group sm:text-right">
                <div className="flex items-center gap-x-2 text-gray-500 sm:justify-end">
                  Previous
                  <ArrowLongRightIcon className="w-5 h-5" />
                </div>
                <p className="mt-4 uppercase text-blue-700 font-bold text-xs tracking-wide">
                  {next.frontmatter.location}
                </p>
                <h3 className="font-bold text-lg text-gray-700 group-hover:underline">
                  {next.frontmatter.title}
                </h3>
              </Link>
            </div>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </>
  )
}

export default ProjectPage

export function Head({ data }) {
  const project = data.markdownRemark
  return <MyHelmet title={project.frontmatter.title} description={project.excerpt} />
}

export const projectQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
        date
        location
        featuredimage {
          alt
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
