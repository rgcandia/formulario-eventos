import React from 'react';
import { Dialog ,  Slide ,AppBar, Toolbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RenderForm from './RenderForm/RenderForm';
import { useDispatch , useSelector} from "react-redux";
import { updateForm } from '../../../../redux/slice.js'
import { estructuraFormulario } from '../../../../redux/service';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function Form({isOpen,handleClose}){
    const resetForm = ()=>{
        return estructuraFormulario;
    }
   
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.data.form);
    
    const handlerExit = ()=>{
       handleClose(false)
       dispatch(updateForm(resetForm()))
    }

    return (
        <Dialog
fullScreen
open={isOpen}
onClose={handleClose}
TransitionComponent={Transition}
>
<AppBar  sx={{ position: 'relative' }}>
    <Toolbar>
        <IconButton
         edge="start"
         color="inherit"
         onClick={handlerExit}
         aria-label="close"
        >
            <CloseIcon/>
        </IconButton>
    </Toolbar>
</AppBar>
<RenderForm handleClose={handlerExit}/>
</Dialog> 
    )
}