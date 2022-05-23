import {useState, useEffect} from 'react';
import Header from './components/header.js';
import AddContact from './components/add-contact.js';
import ContactList from './components/contact-list.js';
import { v4 as uuid4 } from 'uuid';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ContactDetail from './components/contact-detail.js';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
const [contacts, setContacts] = useState([]);

const addContactHandler = (deliveredProps) => { //gauna kontaktus per propsus iš vaikinio elemento add-contact per per propsus
  setContacts([...contacts, {id:uuid4() , ...deliveredProps}])//...išlaiko esama kontaktu sąrašą ir prideda naujus.
}

const removeContactHandler = (id) => {
  const newContactList = contacts.filter(item=>{
    return item.id !== id
  })
  setContacts(newContactList)
}
useEffect(()=>{
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrieveContacts.length>0) setContacts(retrieveContacts);
}, [])

useEffect(()=>{
  // if (contacts.length>0) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }
}, [contacts])




  return (
    <div>
      <Header />
      <BrowserRouter>
      <Routes>
            <Route index element={<ContactList contacts={contacts} getContactId={removeContactHandler}/> }/>
            <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>}/>
            <Route path='/contact/:id' element={<ContactDetail />}/>
      </Routes>

      </BrowserRouter>

      {/* <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/> */}
    </div>
  );
}

export default App;
