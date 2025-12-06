import React from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Filter } from "./components/Filter";
import { ContactList } from "./components/ContactList";

class App extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (name, number) => {
    const newUser = {
      id: `id-${Date.now()}`,
      name: name,
      number: number,
    };
    this.setState(
      (prev) => ({
        contacts: [...prev.contacts, newUser],
      }),
      () => console.log(this.state.contacts)
    );
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contacts;

    return (
      <>
        <Form onAdd={this.addContact} />
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
