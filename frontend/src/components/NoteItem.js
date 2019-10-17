import React from 'react';

const NoteItem = (props) => {
  console.log(props)
  return(
  <li>
    <h2>{props.note.title}</h2>
    <p>{props.note.body}</p>
  </li>
 );
}

export default NoteItem;
