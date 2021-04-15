/* global chrome */
import React from 'react';
import styled from 'styled-components';
import './App.css';
import { ShadowRoot } from './ShadowRoot';

const InjectedHeader = styled.h1`
  z-index: 10;
  text-align: center;
`;

// Source: https://www.youtube.com/watch?v=mveFTfzJ_io

function App() {
  return (
    <ShadowRoot>
      <InjectedHeader>Injected code</InjectedHeader>
    </ShadowRoot>
  );
}

export default App;
