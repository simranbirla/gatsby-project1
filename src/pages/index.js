import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      Hello world!
      <Link to="/about">About</Link>
    </Layout>
  )
}
