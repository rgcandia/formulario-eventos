import {Box} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import { initListener } from "../../services";
import {uploadValues} from '../../redux/slice.js'
import { listenersocket} from '../../socket.js'
// import {Outlet} from 'react-router-dom'
import Login from "./Login/Login";
import Unlog from "./Unlog/Unlog";
import { useEffect } from 'react';
export default function Index (){
    const dispatch = useDispatch();
    const {user,forms} = useSelector(state=>state.data)
    useEffect(()=>{
        initListener(dispatch)
        user?listenersocket(user,dispatch,uploadValues):null
    },[user])
    useEffect(()=>{
        window.scrollTo(0, 0);
     },[forms])
    return(<Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        {!user&&<Login/>}
       {user&&<Unlog/>}
       {/* <Outlet/> */}
    </Box>)
}