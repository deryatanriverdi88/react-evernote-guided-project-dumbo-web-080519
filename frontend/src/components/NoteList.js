import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  // console.log(props.notes)
  return (
    <ul>
      { props.notes.map( note => {
        return <NoteItem note={note} key={note.id}/>
      })
    }
    </ul>
  );
}

export default NoteList;
