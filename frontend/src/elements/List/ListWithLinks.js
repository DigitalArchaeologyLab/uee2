import React from "react";

function ListWithLinks(props) {
  const items = props.list;
  const listItems = items.map((item, index) => <li key={index}><a href={item.path}>{item.name}</a></li>);
  return <ul className={props.class}>{listItems}</ul>;
}

export default ListWithLinks;
