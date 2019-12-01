import React from 'react';

import Form from './Form';
import Settings from './Settings';
import PetList from './PetList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      search: '',
      order: 'no',
    };

    this.uniqueId = 1;

    this.addClient = this.addClient.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteClient = this.deleteClient.bind(this);
  }

  addClient(clientFromForm) {
    const clients = [... this.state.clients];
    const client = { ...clientFromForm, id: this.uniqueId };
    clients.push(client);
    this.setState({ clients });
    this.uniqueId++;
  }

  deleteClient(id) {
    let clients = [... this.state.clients];
    clients = clients.filter(client => client.id !== id);
    this.setState({ clients });
  }

  handleChange(e) {
    this.setState( {[e.target.name]: e.target.value} )
  }

  render() {
    let copyClients = [...this.state.clients];

    if (this.state.search !== '') {
      copyClients = copyClients.filter(client => {
        return client.name.toLowerCase().includes(this.state.search.toLowerCase());
      })
    }
    
    if (this.state.order !== 'no') {
      const flag = this.state.order === 'az' ? 1: -1;
      copyClients.sort((a, b) => {
        if(a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1 * flag;
        }
        return -1 * flag;
      })
    }

    return (
      <div className="container my-3">
        <div className="row">
          <div className="col-8 offset-2">
            <Form addClient={this.addClient} />
            <Settings handleChange={this.handleChange}/>
            <PetList clients={copyClients} deleteClient={this.deleteClient} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
