import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <main>
        About Page
        <Link to="/">Home</Link>
      </main>
    </Layout>
  )
}
