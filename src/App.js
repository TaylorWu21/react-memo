import React, { Component } from 'react';
import {
  Container,
  Header,
  Input,
} from 'semantic-ui-react';
import { Planet } from 'react-kawaii';
import logo from './logo.svg';
import {
  AnimatedLogo
} from './styles';

const MOODS = [
  'sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited'
];

class App extends Component {
  state = {
    currentIndex: 0,
    value: '',
  }

  handleChange = (e) => this.setState({ value: e.target.value });

  changeMood = () => {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: (currentIndex - 1 + MOODS.length) % MOODS.length
    })
  }

  render() {
    const { currentIndex, value }  = this.state;

    return (
      <Container>
        <Header as='h1' textAlign='center'>
          React Memo <AnimatedLogo src={logo} onClick={this.changeMood} />
        </Header>

        <Input
          fluid
          placeholder='Use this to update state'
          onChange={this.handleChange}
          value={value}
        />

        <Header>Mood:</Header>
        <Planet
          size={220}
          mood={MOODS[currentIndex]}
          color="#FCCB7E"
        />

      </Container>
    );
  }
}

export default App;
