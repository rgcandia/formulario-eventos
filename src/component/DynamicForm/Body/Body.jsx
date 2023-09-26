import React from 'react';
import {  Box} from '@mui/material';
import Card from './Card/Card.jsx';
import Form from './Form/Form.jsx';
import ViewForm from './ViewForm/ViewForm.jsx';
import { useState } from 'react';
import styles from './Body.module.css';
export default function Body() {

  const [open,setOpen] = useState(false)
  const [open2,setOpen2] = useState(false)
  return (
    <Box className={styles.container}>
     <Card  handleOpen={setOpen} handleOpen2={setOpen2} />
     <Form isOpen={open} handleClose={setOpen}/>
      <ViewForm isOpen={open2} handleClose={setOpen2}/>
    </Box>
  );
}