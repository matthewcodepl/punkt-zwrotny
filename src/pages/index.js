import React from "react"
// import { Link } from "gatsby"
import Nav from '../components/navigation'
import Top from '../components/top' 
import Post from '../components/Post-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <Nav />
  <Top />
  <Post/>
  </Layout>
)

export default IndexPage
