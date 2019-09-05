import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid container justify="center" className="max-w-700 m-0-auto">
      {pageNumbers.map(number => (
        <Grid item xs key={number}>
          <Button variant="contained" onClick={() => paginate(number)}>
            {number}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Pagination;
