import { Component } from "react";
import { nanoid } from "nanoid";

import styles from "./common.module.scss";

class App extends Component {
  state = {
    contacts: [
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  addContact = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      const { name, number, contacts } = prevState;
      const newContact = {
        id: nanoid(),
        name, 
        number,
      }

      return {contacts:[newContact, ...contacts]}
    })
  }

  render() {
    const { addContact, handleChange } = this;
    const { contacts } = this.state;
    const contactInfo = contacts.map(({ id, name, number }) => {
      return <li key={id} className={styles.contacts__item}>{name}:   {number}
        <button className={styles.contacts__button}>Delete</button>
      </li>
    })
    //console.log(contactInfo);
    return (
      <div className={styles.mainWrapper}>
        <h1 className={styles.title}>Phonebook</h1>
        <form className={styles.form} onSubmit={addContact}>
          <div className={styles.form__wrapper}>
            <label className={styles.form__label}>Name</label>
            <input
              className={styles.form__input}
              placeholder="Contact name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}/>
            <label className={styles.form__label}>Number</label>
            <input
              className={styles.form__input}
              placeholder="Contact number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}/>
            <button className={styles.form__button} type="submit">Add contact</button>
          </div>
        </form>
        <h2 className={styles.title}>Contacts</h2>
        <div className={styles.contacts__wrapper}>
          <label className={styles.contacts__label}>Find contacts by name</label>
          <input
            className={styles.contacts__input}
            placeholder="Type to find a contact"
          ></input>
        </div>
        <ul className={styles.contacts}>
          {contactInfo}
        </ul>
      </div>
    )
  }
}
export default App;