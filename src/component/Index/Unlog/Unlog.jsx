import { Box, Button, Typography,AppBar,Toolbar } from "@mui/material";
import {disconect} from '../../../firebase/auth_sign_out.js'
import { useDispatch, useSelector } from "react-redux";
import {uploadUser} from '../../../redux/slice.js'
import LogoutIcon from '@mui/icons-material/Logout';
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
  <Box>
                  <a href="/">
                    <img
                    className={styles.logo}
                    src={logo}
                    alt={logo.substring(30)}
                    />
                    </a>
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