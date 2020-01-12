import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pages = [];
  const numberOfPages = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }

  return (
    <Grid container justify="center" className="max-w-700 m-0-auto">
      {pages.map(number => (
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
