import React, { Component } from 'react';
import Counter from './Counter';
import styled from 'styled-components';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <AppWrap className="App">
        <Counter />
      </AppWrap>
    );
  }
}

export default App;

const AppWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;