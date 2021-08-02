import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Cards from "./cards/Cards";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import Error from "./Error";

const App = () => {
  const [state, setState] = useState({
    data: [],
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 1,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    totalPages: 0,
    status: "idle",
    searchTerm: "",
  });

  const handleChange = (event) => {
    setState({ ...state, searchTerm: event.target.value });
  };

  useEffect(() => {
    const getData = async () => {
      setState({ ...state, status: "loading" });

      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${state.activePage}&name=${state.searchTerm}`
        );
        setState({
          ...state,
          data: response.data.results,
          totalPages: response.data.info.pages,
          status: "success",
        });
      } catch (error) {
        setState({ ...state, status: "error" });
      }
    };

    if (state.searchTerm && !state.data.length) {
      getData();
    } else {
      const timeoutId = setTimeout(() => {
        getData();
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [state.activePage, state.searchTerm]);

  const handlePaginationChange = (e, { activePage }) => {
    setState({ ...state, activePage });
  };

  return (
    <>
      <Header onChange={handleChange} term={state.searchTerm} />
      {state.status === "loading" && <Spinner />}
      {state.status === "error" ? <Error /> : <Cards data={state.data} />}
      <Pagination
        activePage={state.activePage}
        boundaryRange={state.boundaryRange}
        siblingRange={state.siblingRange}
        showEllipsis={state.showEllipsis}
        showFirstAndLastNav={state.showFirstAndLastNav}
        showPreviousAndNextNav={state.showPreviousAndNextNav}
        totalPages={state.totalPages}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  );
};

export default App;
