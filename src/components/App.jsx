import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    isDeleted: false,
    isCreated: false,
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length > 0)
      this.setState({ contacts: JSON.parse(localData) });
  }

  // componentDidUpdate - state update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts?.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    if (prevState.contacts?.length > this.state.contacts.length) {
      this.setState({ isDeleted: true });

      setTimeout(() => {
        this.setState({ isDeleted: false });
        // Notify.success('The contact was deleted');
      }, 2000);
    }
    if (prevState.contacts?.length < this.state.contacts.length) {
      this.setState({ isCreated: true });

      setTimeout(() => {
        this.setState({ isCreated: false });
        // Notify.success('The contact was deleted');
      }, 2000);
    }
  }

  handleSubmit = data => {
    const newContact = { ...data, id: nanoid() };
    const doesExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (doesExist) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    }
  };

  handleFilteredContacts = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        {this.state.isDeleted && (
          <div class="alert alert-primary" role="alert">
            The contact was deleted!
          </div>
        )}
        {this.state.isCreated && (
          <div class="alert alert-primary" role="alert">
            The contact was created!
          </div>
        )}
        <Section title="Phonebook">
          <FormAddContact onSubmit={this.handleSubmit} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length > 0 && (
            <>
              <Filter onChange={this.handleFilteredContacts} />
              <ContactList
                contacts={filteredContacts}
                onDelete={this.deleteContact}
              />
            </>
          )}
        </Section>
      </div>
    );
  }
}
