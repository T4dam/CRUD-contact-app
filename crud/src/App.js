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
import api from "./api/contacts"

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
const [contacts, setContacts] = useState([]);

//get
const retrieveContacts = async () => {
  const response = await api.get("/contacts");
  return response.data
}
useEffect(()=>{
  const allContacts = async () => {
    const allContacts = await retrieveContacts();
    if(allContacts) setContacts(allContacts)
  }
  allContacts()
},[])


//post
const addContactHandler = async (deliveredProps) => { 
const request = {id:uuid4() , ...deliveredProps}
const response = await api.post('/contacts', request);
console.log(response)
  setContacts([...contacts, response.data])
}

//delete
const removeContactHandler = async (id) => {
  await api.delete(`/contacts/${id}`)
  const newContactList = contacts.filter(item=>{
    return item.id !== id
  })
  setContacts(newContactList)
}



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
