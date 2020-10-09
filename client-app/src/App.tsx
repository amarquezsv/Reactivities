import React, {Component}  from 'react';
import { Header, List,Button } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css'; //Para que carge los estilos

import './App.css';
import axios from 'axios';
class App extends Component {

  state = {
    values: []
  }

  componentWillMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response) => {
        this.setState({
          values: response.data
        })
      })
  }

  render(){
    return (
      <div>
        <Header as="h2" icon="plug" content="Uptime Guarantee" />
        <ul></ul>

        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }

}

export default App;
