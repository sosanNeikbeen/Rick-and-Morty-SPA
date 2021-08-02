import React from "react";
import { Grid, Container, Header } from "semantic-ui-react";

const Error = () => (
  <Container>
    <Grid>
      <Grid.Column textAlign="center">
        <Header as="h1" color="grey">
          No Data Found
        </Header>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Error;
