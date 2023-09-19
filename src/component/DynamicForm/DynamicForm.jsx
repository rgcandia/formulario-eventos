import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Body from "./Body/Body";
import styles from "./DynamicForm.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initListener } from "../../services";
import { listenerUser,listenerForms } from "../../socket";
import { uploadValues } from "../../redux/slice";
export default function DynamicForm() {
const dispatch =  useDispatch();
const {forms,user} = useSelector(state=>state.data)
useEffect(()=>{
  initListener(dispatch)
  user?listenerUser(user,dispatch,uploadValues):null
  user?listenerForms(dispatch,uploadValues):null
},[user])

  useEffect(()=>{
    
    window.scrollTo(0, 0);
 },[forms]) 

  return (
   <Box className={styles.containerForm} sx={{paddingTop:'10%'}}>
    
    {forms&&<>
    
      <Box>
      <Link to='/' style={{textDecoration:'none'}}>
        <Typography variant='h6' color='primary'>  <ArrowBackIcon/> Volver</Typography>
      </Link>
     </Box>
    <Body />
    </>}

   </Box>
  );
}
