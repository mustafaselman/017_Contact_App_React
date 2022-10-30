import {useState, useEffect} from 'react'
import List from './List';
import Form from './Form';
import "./styles.css"
function Contacts() {
    const [contacts, setContacts] = useState([{}]);

  return (
    <div id="container">
        <h1>Contacts</h1>
        <List contacts={contacts}></List>
        <Form setContact={setContacts} contacts={contacts}></Form>
    </div>
  )
}

export default Contacts;