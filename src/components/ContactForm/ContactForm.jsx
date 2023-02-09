// import { useState } from 'react';
// // import { nanoid } from 'nanoid';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getContacts, addContact } from '../../redux/slice';

// // import PropTypes from 'prop-types';
// import './ContactForm.module.css';

// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from '../../redux/contactsSlice';


// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   // const contacts = useSelector(getContacts);
//   // const dispatch = useDispatch();

//   const { data: contacts } = useGetContactsQuery();
//   const [addContact] = useAddContactMutation();

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const contact = {
//       name,
//       number,
//     };


//     contacts.find(item => (item.name === contact.name.toLowerCase()
//     || item.number === contact.number))
//       ? alert(`${name} is already in contacts`)
//       : addContact(contact)

//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={handleChange}
//         placeholder="Name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <input
//         type="tel"
//         name="number"
//         value={number}
//         onChange={handleChange}
//         placeholder="number"
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//         required
//       />
//       <button type="submit">Add contact</button>
//     </form>
//   );
// };

// ContactForm.prototypes = {
//   name: PropTypes.string,
//   number: PropTypes.number,
//   onSubmit: PropTypes.func,
// };

import { useState } from 'react';
import './ContactForm.module.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name,
      phone,
    };


    contacts.find(item => (item.name === contact.name.toLowerCase()
    || item.phone === contact.phone))
      ? alert(`${name} is already in contacts`)
      : addContact(contact)

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        type="tel"
        name="number"
        value={phone}
        onChange={handleChange}
        placeholder="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};




