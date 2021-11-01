import React from "react"
import ProductPageTemplate from "../../templates/ProductPageTemplate"
const marked = require("marked")

const ProductPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  // need to get the image assets and put them in the team array
  const team = data.team.map(member => {
    const image = getAsset(member.image)
    return {
      ...member,
      image,
    }
  })

  // render markdown for cms preview
  const html = marked(data.body)

  if (data) {
    return (
      <ProductPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        html={html}
        team={team}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ProductPagePreview
