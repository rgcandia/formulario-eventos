import { Box } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import styles from './CreateForm.module.css';
import { useSelector } from "react-redux";
import { createForm } from "../../socket.js"; 
import { alertSetFormOk } from "../../services.js";
const CreateForm = ()=>{
    const {user} =  useSelector(state=>state.data)
    const handlerClick = (e)=>{
        createForm(user);
        alertSetFormOk();
    }
    return (<Box>
       <Box className = {styles.button} component='div' onClick={handlerClick}>
       <AddIcon sx={{fontSize:40}}/>
       </Box>
    </Box>)
}

export default CreateForm;