import React from 'react'
import {
    CardActionArea,
    CardMedia,
    Card,
    CardContent,
    Typography,
    Button
 } from '@mui/material';
 import { useLocation } from 'react-router-dom';
 import {Link} from 'react-router-dom';

const ContactDetail = () => {
    const location = useLocation()

    const {email, name} = location.state.data

  return (
    <div className='w-full h-auto mt-12'>
        <div className='flex justify-center'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://giftspeaks.in/wp-content/uploads/2020/01/Bearded-Face-Animated-Pure-Cotton-Tshirt-for-Men-White-Design.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
       <Link to='/'>
        <div className="text-center mt-5"><Button className='flex justify-center' variant="contained">Back to Contact List</Button></div>
       </Link>
    </div>
  )
}

export default ContactDetail