import * as React from "react"
import ButtonAppBar from '../components/appBar';
import Grid from '@material-ui/core/Grid';


// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <ButtonAppBar />
      <title>Home Page</title>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <Grid
          item
        >
          grid item 1
        </Grid>
        <Grid item>
          grid item 2
        </Grid>
        <Grid item>
          grid item 3
        </Grid>
      </Grid>

    </main>
  )
}

export default IndexPage
