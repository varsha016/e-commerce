import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { URL } from '../../redux/api';
import UpdateProduct from './UpdateProduct';
import CloseIcon from '@mui/icons-material/Close'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  
  function ChildModal({edit }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
      


        <Typography variant='body1' sx={{display:"flex", gap:"4px" ,marginTop:"20px"}}  >
        <Button variant='contained'  color='secondary' onClick={e=>{
          handleOpen()
       
          }} >Edit Data</Button>
          
        <Button variant='outlined' color='error' onClick={e=>handleClose()}><CloseIcon/> </Button>
        </Typography>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >

          <Box sx={{ ...style, width: 500 }}>
          <UpdateProduct  edit={edit}  />
          </Box>
        </Modal>
      
      </React.Fragment>
    );
  }
  ////SINGLE PRODUCT MODAL
  export default function EditModals({edit,handleClose,open}) {
   
  
    // console.log(edit);
    return (
      <div>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 400 }}>
          <Card sx={{ maxWidth: 345 , }}>
              <CardMedia
          component="img"
          height="300"
          image={`${URL}/${edit.image[0]}`} 
          alt={`${URL}/${edit.image[0]}`}
        />
      
       
        <CardContent>
        <Typography variant="h6" color="green">
            ₹{edit.name}
          </Typography>
          <Typography variant="h6" color="green">
            ₹{edit.price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {edit.brand}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {edit.desc}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {edit.category}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {edit.stock}
          </Typography>
        
          
        </CardContent>
      </Card>
      
            <ChildModal edit={edit}/>
          </Box>
        </Modal>
      </div>
    );
  }