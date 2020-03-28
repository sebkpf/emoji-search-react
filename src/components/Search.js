import React from "react";

function Search({ search }) {
  return (
    <>
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="text"
        placeholder="which emoji are you looking for?"
        onChange={event => {
          search(event);
        }}
      />
    </>
  );
}

export default Search;
