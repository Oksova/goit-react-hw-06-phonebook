import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
import s from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
          <p className={s.nameText}>
            {name} : {number}
          </p>

          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
