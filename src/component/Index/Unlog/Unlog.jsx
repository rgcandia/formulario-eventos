import { Box, Button, Typography,AppBar,Toolbar,IconButton  } from "@mui/material";
import {disconect} from '../../../firebase/auth_sign_out.js'
import { useDispatch, useSelector } from "react-redux";
import {uploadUser} from '../../../redux/slice.js'
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../../images/encabezado-wellspring.png';

import styles from './Unlog.module.css'
export default function Unlog(){
  const {user} = useSelector(state=>state.data)
    const dispatch = useDispatch;
  const handleClick = ()=>{
    disconect(dispatch,uploadUser);
    location.reload()
  }
    return(<AppBar position="static">
      <Toolbar>
  <Box className={styles.contenedor}>
  <Box>
                  <a href="/">
                    <img
                    className={styles.logo}
                    src={logo}
                    alt={logo.substring(30)}
                    />
                    </a>
  </Box>
  <Box></Box>
  <Box sx={{display:'flex'}}>
  <IconButton 
  color='secondary' 
  >
    <AccountCircleIcon className={styles.icon}/>
    <Typography className={styles.text}>{user}</Typography>
    </IconButton>  
  </Box>     
  </Box>
      </Toolbar>

    </AppBar>)
}



// <Box className={styles.unlog}>
       
       
//        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//         <Typography variant='body2'>Bienvenido : <strong>{user}</strong></Typography>
//        </Box>
      
//        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//        <Button variant='outlined' color='primary' onClick={handleClick}>
//        <LogoutIcon/>
//        <Typography>logout</Typography>
//         </Button>
//        </Box>
      
       
     
//     </Box>