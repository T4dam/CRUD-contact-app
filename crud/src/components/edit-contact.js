import React, {useState} from 'react';
import {
    Button,
    TextField
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const EditContact = (props) => {
    const location = useLocation()
    const {id} = location.state.data;
  
    
    const [name, setName] = useState(location.state.data.name)

    const [email, setEmail]= useState(location.state.data.email)
    const navigate = useNavigate();
    
    
    const update = (e) => {
        e.preventDefault();
        props.updateContacthandler({id, name, email});
        navigate("/");
    }
    
    
    // const {email, name} = location.state.data;
    return (
    <div className='w-[600px] mx-auto mt-48'>
        <h2 className='text-lg font-bold my-3'>Edit Contact</h2>
        <form className='w-300 h-500' onSubmit={update}>
            <div>
                <div>  <TextField sx={{height: 'auto', width: '100%'}}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                </div>
            </div>
            <div>
                <div className='py-2'>
                    <TextField sx={{height: 'auto', width: '100%'}}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
            </div>
            <Button
            type="submit"
            variant="contained">
                Update
            </Button>
        </form>
    </div>
  )
}

export default EditContact