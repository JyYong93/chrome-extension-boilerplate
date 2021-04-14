/* global chrome */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

// const sampleNotesShape = [{ x: 98, y: 836, note: "some note text" }];

const Container = styled.div`
  z-index: 2;
  border: 1px solid grey;
  position: absolute;
  background: white;
  top: ${props => props.y + 'px'};
  left: ${props => props.x + 'px'};
`;

const Header = styled.div`
  height: 20px;
  background-color: papayawhip;
`;

const StyledButton = styled.button`
  height: 20px;
  border: none;
  opacity: 0.5;
  float: right;
`;

const StyledTextArea = styled.textarea`
  color: dark grey;
  height: 200px;
  width: 200px;
  border: none;
  background-color: hsla(0, 0%, 100%, 0.2);
`;

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);

  // listen for shift + click to add note
  useEffect(() => {
    function clickListener(e) {
      if (e.shiftKey) {
        setNotes(prevNotes => [...prevNotes, { x: e.pageX, y: e.pageY }]);
      }
    }
    document.addEventListener('click', clickListener);
    return () => document.removeEventListener('click', clickListener);
  }, []);

  return (
    <div>
      {notes.map(note => {
        return (
          <Container x={note.x} y={note.y} className='react-sticky-note'>
            <Header>
              <StyledButton>X</StyledButton>
            </Header>
            <StyledTextArea value={note.note ? note.note : ''} />
          </Container>
        );
      })}
    </div>
  );
};

export default StickyNotes;
