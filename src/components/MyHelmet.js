import React from "react"

function MyHelmet({ title, description }) {
  return (
    <>
      {title ? <title>{title} | Total Control</title> : null}
      {description ? <meta name="description" content={description} /> : null}
    </>
  )
}

export default MyHelmet
