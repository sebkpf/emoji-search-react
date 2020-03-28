import React, { useState } from "react";

function Line({ symbol, title }) {
  const [hoverLine, setHoverLine] = useState(false);
  return (
    <ul
      className="line"
      // handle hover state
      onMouseEnter={() => setHoverLine(true)}
      onMouseLeave={() => setHoverLine(false)}
      // handle copy to clipboard on click
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <li>
        {symbol} {title}
      </li>
      {hoverLine && <li>Click to copy!</li>}
    </ul>
  );
}

export default Line;
