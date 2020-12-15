import React, { Component } from 'react';
import Layout from './container/layout';
import Card1 from './component/card1';
import Card2 from './component/card2';
import Card3 from './component/card3';
import Card4 from './component/card4';
import { ThemeContext, themes } from './context/ThemeContext';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: themes.green,
    }
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.green ? themes.red : themes.green
      }))
    }

    this.state = {
      theme: themes.green,
      toggleTheme: this.toggleTheme,
    }
  }


  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <Layout
          card1={<Card1 />}
          card2={<Card2 />}
          card3={<Card3 />}
          card4={<Card4 />}
        // changeTheme={this.toggleTheme}
        />
      </ThemeContext.Provider>
    );
  }
}

export default App;
