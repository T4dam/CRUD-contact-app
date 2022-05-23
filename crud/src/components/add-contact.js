import React, {useState} from 'react';
import {
    Button,
    TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddContact = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        props.addContactHandler({name, email});
        navigate("/");
    }

  return (
    <div>
        <h2 className='text-lg font-bold my-3'>Add New Contact</h2>
        <form className='w-300 h-500' onSubmit={handleSubmit}>
            <div>
                <div>  <TextField sx={{height: 'auto', width: '100%'}}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e)=>setName(e.target.value)}/></div>
            </div>
            <div>
                <div className='py-2'>
                    <TextField sx={{height: 'auto', width: '100%'}}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
            </div>
            <Button
            disabled={name==='' || email=== ''}
            type="submit"
            variant="contained">
                Submit
            </Button>
        </form>
    </div>
  )
}

export default AddContact