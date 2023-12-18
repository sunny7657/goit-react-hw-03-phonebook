import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => {
      const { name, number, id } = contact;
      return (
        <ContactItem
          contactName={name}
          contactNumber={number}
          key={id}
          onDelete={() => onDelete(contact.id)}
        />
      );
    })}
  </ul>
);
