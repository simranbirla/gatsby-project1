import { graphql, useStaticQuery } from "gatsby"

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetaData
