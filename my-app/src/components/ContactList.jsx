import React from "react";

export class ContactList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <h3>{contact.name}</h3>
              <p>{contact.number}</p>
              <button onClick={() => this.props.onDelete(contact.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
