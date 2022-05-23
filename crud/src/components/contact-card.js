import React from 'react';
import Pic from './images/acc.png';
import {Link} from 'react-router-dom'

const ContactCard = (props) => {
const {id, name, email} = props.contacts
  return (
    <>
    <div className="flex gap-2 my-2">
        <img className='w-12 h-12' src={Pic} alt='account' />
        <div className="w-full h-auto">
            <div key={id} className='flex justify-between items-center'>
                <div>
                <Link
  to={`/contact/${id}`}
  state={{data: props.contacts}}>
                      <div className='font-bold'>{name}</div>
                      <div>{email}</div>
                    </Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" onClick={()=>{props.clickHandler(id)}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </div>
        </div>
    </div>
            <hr className=''/>
    </>
  )
}

export default ContactCard