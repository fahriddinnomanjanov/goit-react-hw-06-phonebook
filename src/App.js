import {Component} from 'react';
import FormAddContact from './components/FormAddContact';
import ContactList from './components/ContactList'
import Filter from './components/Filter'

class App extends Component {
  state = {
    name: '',
    number: '',
  }  
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parseContacts = JSON.parse(contacts);
  //   this.setState({ contacts: parseContacts });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(contacts))
  //   }
  // }

  render() {
    return (
      <>
        <FormAddContact />

        <Filter />
        <ContactList />
    </>
    );
  }
}

export default App;