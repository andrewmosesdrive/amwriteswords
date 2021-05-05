import * as React from "react"
import ButtonAppBar from '../components/appBar';
import Grid from '@material-ui/core/Grid';
import NewestBook from '../components/newestBook'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
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
          <NewestBook/>
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
