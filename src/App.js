import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from './redux/phonebook-selectors';
import * as phonebookActions from './redux/phonebook-actions';
import Container from './components/Container/Container';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevState, prevProps) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     const { contacts } = this.state;

//     if (
//       contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       )
//     ) {
//       alert(`${name} is already in contacts.`);
//     } else if (contacts.find(contact => contact.number === number)) {
//       alert(`${number} is already in contacts.`);
//     } else if (name.trim() === '' || number.trim() === '') {
//       alert("Enter the contact's name and number phone!");
//     } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
//       alert('Enter the correct number phone!');
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   formSubmitHandler = data => {
//     console.log(data);
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} contacts={contacts} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </Container>
//     );
//   }
// }
// export default App;
