import React, { useState } from "react";
import { Input, Button } from "reactstrap";

const Search = (props) => {
  const [query, setQuery] = useState("");
  return (
    <div className="d-flex justify-content-center shadow p-3 mb-2 bg-white rounded">
      <div className="text-center">
        <h3>Search Images</h3>
        <div className="search-container d-flex justify-content-between">
          <Input name="query" onChange={(e) => setQuery(e.target.value)} />
          <Button
            className="mx-2"
            color="primary"
            onClick={() => {
              query && props.fetchImages(query);
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
