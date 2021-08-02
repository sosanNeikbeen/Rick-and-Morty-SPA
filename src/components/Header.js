import React from "react";
import { Menu, Input, Grid } from "semantic-ui-react";

const Header = ({ term, onChange }) => {
  return (
    <Menu inverted color="teal" fluid vertical>
      <Menu.Item className="header">
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Input
                icon="search"
                placeholder="Search..."
                value={term}
                onChange={onChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
