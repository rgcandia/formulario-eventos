// TableForms.js
import { Box, Button, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import ListIcon from '@mui/icons-material/List';
import styles from "./TableForms.module.css";
import CreateForm from "../CreateForm/CreateForm";
import { deleteFormPending } from "../../socket";
import { alertDeleteFormPending,alertErrorDeleteFormPending } from "../../services";
export default function TableForms({ forms }) {
 const {user} = useSelector(state=>state.data)
  useEffect(() => {
   
    
  }, [forms]);
const handleDelete = (id,user)=>{
const form = forms.find((e)=>{return e.id===id})
 if(form.pending){
  deleteFormPending(id,user)
  alertDeleteFormPending();
 }else{
  alertErrorDeleteFormPending();
 }


}
  return (
    <Box className={styles.tablecontainer}>
    
        {forms.length?<>
        <Box sx={{display:'flex'}}>
               <ListIcon/>
               <Typography variant="body1" component="p" className={styles.tabletitle}>
        Tus formularios</Typography>
        </Box>
        <Box sx={{width:'100%'}}>
        <CreateForm/>
      </Box>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pending</th>
            <th>Creation date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => {
          
            return (
              <tr
              key={form.id}
                className={form.pending ? styles.pendingRow : null}
                >
                <td>
                
                    {form.id}
                  
                </td>
                <td>{form.pending ? "Yes" : "No"}</td>
                <td>{form.createdAt.split("T")[0]}</td>
                <td><Button onClick={()=>{handleDelete(form.id,user)}}><DeleteForeverIcon/></Button></td>
              </tr>
            )
          })}
        </tbody>
          
      </table> </> :null
     }
     {!forms.length  ?<>
      <Box sx={{width:'100%'}}>
      <Box sx={{width:'100%'}}>
        <CreateForm/>
        
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <Typography>No tienes formularios en la base de datos</Typography>
      <Typography>Para crear un formulario nuevo, haz click en el botón del signo más.</Typography>
      </Box>
      </Box>
     </>:null}
     
    </Box>
  );
}