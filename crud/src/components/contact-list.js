import React from 'react';
import ContactCard from './contact-card';
import {Button} from '@mui/material';
import { Link } from 'react-router-dom';


const ContactList = (props) => {

    const deleteContactHandler = (id) => {
         props.getContactId(id)
    }
      // const data = [
      //   {
      //     id:'2',
      //     name: 'Tadas',
      //     email: 'vovo@ReportGmailerrorred.com',
      //   }
      // ]

    const renderContactsList = props.contacts.map((item, index) => {
        return (
          <ContactCard key={index} contacts={item} clickHandler={deleteContactHandler} />
        )
    })
  return (
      <>
    <div className='mt-12 font-bold text-lg mb-4'>
      <div className="flex justify-between">
        <h2>Contact List</h2>

        <Link to='/add'>
          <Button type="submit" variant="contained">
                    Add Contact
                </Button>
        </Link>
      </div>
      </div>
    <div>
        {renderContactsList}
    </div>

      </>
  )
}

export default ContactList