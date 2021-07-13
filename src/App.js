import React, { Component } from 'react';
import initialContacts from './contacts.json';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './styles/main.scss';

class App extends Component {
    state = {
        // contacts: initialContacts,
        // filter: '',
    };
    // componentDidUpdate(prebProps, prevState) {
    //     if (this.state.contacts !== prevState.contacts) {
    //         localStorage.setItem(
    //             'contacts',
    //             JSON.stringify(this.state.contacts),
    //         );
    //     }
    // }
    // componentDidMount() {
    //     const contacts = localStorage.getItem('contacts');
    //     const parsedContacts = JSON.parse(contacts);
    //     if (parsedContacts) {
    //         this.setState({ contacts: parsedContacts });
    //     }
    // }
    // addContact = ({ name, id, number }) => {
    //     const newContact = {
    //         name,
    //         id,
    //         number,
    //     };
    //     this.setState(({ contacts }) => ({
    //         contacts: [newContact, ...contacts],
    //     }));
    // };
    // handleFilter = event => {
    //     this.setState({ filter: event.currentTarget.value });
    // };
    // getSearchingContacts = () => {
    //     const { contacts, filter } = this.state;
    //     const normalizedFilter = filter.toLowerCase();
    //     return contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(normalizedFilter),
    //     );
    // };
    // getAllNames = () => {
    //     return this.state.contacts.map(contact => contact.name);
    // };
    // removeContact = contactId => {
    //     this.setState(prevState => ({
    //         contacts: prevState.contacts.filter(
    //             contact => contact.id !== contactId,
    //         ),
    //     }));
    // };
    render() {
        return (
            <>
                <Container className="phonebook-cont" title="Phonebook">
                    <ContactForm
                    // onSubmit={addContact}
                    // existingNames={getAllNames()}
                    />
                </Container>
                <Container className="contacts-cont" title="Contacts">
                    {/* <Filter value={state.filter} onChange={handleFilter} />
                    <ContactList
                        passArray={visibleContacts}
                        onRemove={removeContact}
                    /> */}
                </Container>
            </>
        );
    }
}

export default App;
