import React, { useReducer, Fragment } from "react";
import { Container, Grid, Image, Button } from "semantic-ui-react";
import "./card.css";
import Modal from "../Modal";

const ModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        open: true,
        dimmer: action.dimmer,
        size: action.size,
        id: action.id,
      };
    case "CLOSE_MODAL":
      return { ...state, open: false };
    default:
      throw new Error();
  }
};
const Cards = ({ data }) => {
  const [state, dispatch] = useReducer(ModalReducer, {
    open: false,
    dimmer: undefined,
    size: undefined,
    id: "",
  });
  const { open, dimmer, size, id } = state;

  return (
    <Container>
      <Grid centered doubling columns={5}>
        {data.map((el) => {
          return (
            <Fragment key={el.id}>
              <Grid.Column>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <Image src={el.image} />
                    </div>
                    <div className="flip-card-back">
                      <h2>{el.name}</h2>
                      <Button
                        onClick={() =>
                          dispatch({
                            type: "OPEN_MODAL",
                            dimmer: "inverted",
                            size: "mini",
                            id: el.id,
                          })
                        }
                      >
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid.Column>
            </Fragment>
          );
        })}
      </Grid>
      <Modal
        dimmer={dimmer}
        size={size}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        id={id}
      />
    </Container>
  );
};

export default Cards;
