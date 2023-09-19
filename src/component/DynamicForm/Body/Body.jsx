import React from 'react';
import {  Box} from '@mui/material';
import Card from './Card/Card.jsx';
import Form from './Form/Form.jsx';
import { useState } from 'react';
import styles from './Body.module.css';
export default function Body() {

  const [open,setOpen] = useState(false)
  return (
    <Box className={styles.container}>
     <Card  handleOpen={setOpen} />
     <Form isOpen={open} handleClose={setOpen}/>
    </Box>
  );
}