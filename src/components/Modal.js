import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Modal,
  Button,
  List,
  Header,
  Image,
  Grid,
  GridRow,
} from "semantic-ui-react";

const CustomModal = ({ dimmer, size, onClose, open, id }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);

  return (
    <div>
      <Modal dimmer={dimmer} size={size} open={open} onClose={onClose}>
        <Header as="h2" textAlign="center">
          {data.name}
        </Header>

        <Modal.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Image src={data.image} fluid circular />
              </Grid.Column>
            </Grid.Row>
            <GridRow>
              <Grid.Column textAlign="center">
                <List>
                  <List.Item>species: {data.species}</List.Item>
                  <List.Item>Status: {data.status}</List.Item>
                </List>
              </Grid.Column>
            </GridRow>
          </Grid>
        </Modal.Content>

        <Modal.Actions>
          <Button negative onClick={onClose}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CustomModal;
