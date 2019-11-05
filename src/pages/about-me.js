import React from "react"
import { Helmet } from "react-helmet"
import LayoutContactMe from "../components/layout/layout-contact-me"
import { jsx } from "@emotion/core"

export default () => {
  return (
    <LayoutContactMe>
      <Helmet>
        <title>About Me</title>
      </Helmet>
    </LayoutContactMe>
  )
}
