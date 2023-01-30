import { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./common.module.scss";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  render() {
    
    return (
      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>Phonebook</h2>
        <form className={styles.form}>
          <div className={styles.form__wrapper}>
            <label className={styles.form__label}>Name</label>
            <input
              className={styles.form__input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required />
            <label className={styles.form__label}>Number</label>
            <input
              className={styles.form__input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required />
            <button className={styles.form__button}>Add contact</button>
          </div>
        </form>
        <h2 className={styles.title}>Contacts</h2>
        <label className={styles.contacts__label}>Find contacts by name</label>
        <input className={styles.contacts__input}></input>
        <ul className={styles.contacts}>
          <li className={styles.contacts__item}>Rosie Simpson: </li>
          <li className={styles.contacts__item}>Hermione Kline:</li>
          <li className={styles.contacts__item}>Eden Clements:</li>
        </ul>
      </div>
    )
  }
}
export default App;