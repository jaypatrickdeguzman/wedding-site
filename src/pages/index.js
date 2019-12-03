import React from "react"

// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <article class="athelas">
      <div
        class="vh-100 dt w-100 tc bg-dark-gray white cover"
        style={{
          background: "url(../../cover-2.jpg) no-repeat center",
        }}
      >
        <div class="dtc v-mid">
          <header class="white-70">
            <h2 class="f3 fw1 ttu tracked mb2 lh-title">Summer MMXX</h2>
            <h2 class="f4 fw1 lh-title">Morton Arboretum</h2>
          </header>
          <h1 class="f1 f-headline-l fw1 i white-60">CELINNE & JAY</h1>
          <blockquote class="ph0 mh0 measure f4 lh-copy center">
            <p class="fw1 white-70">Coming Soon...</p>
          </blockquote>
        </div>
      </div>
    </article>
  </Layout>
)

export default IndexPage
