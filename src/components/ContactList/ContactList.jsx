import PropTypes from 'prop-types';
import './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter, deleteContact } from '../../redux/slice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

    const findContacts = () => {
    return (
      contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    ));
  };

  const filteredContacts = findContacts();

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};



