import React from "react"
import { graphql } from "gatsby"
import marked from "marked"
import MyHelmet from "../components/MyHelmet"
import ContactPageTemplate from "./ContactPageTemplate"

function ContactPage({ data }) {
  const fm = data.markdownRemark.frontmatter

  const office = {
    ...fm.office,
    address: { html: marked(fm.office.address || "") },
    phone: { html: marked(fm.office.phone || "") },
  }

  return (
    <ContactPageTemplate
      heading={fm.heading}
      subheading={fm.subheading}
      office={office}
    />
  )
}

export default ContactPage

export function Head({ data }) {
  const fm = data.markdownRemark.frontmatter
  return <MyHelmet title={fm.title} description={fm.subheading} />
}

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        office {
          tagline
          location
          address
          phone
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
