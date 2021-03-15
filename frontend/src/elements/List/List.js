import React from "react";

function List(props) {
  const items = props.list;
  const listItems = items.map((item) => 
    <li key={item}>{item}</li>
  );
  return (
    <ul className={props.class}>{listItems}</ul>
  );
}

export default List;