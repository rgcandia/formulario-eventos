import { Box , Typography} from "@mui/material"
import {
    convertirLugar,
    convertirStringAFechaHora,

} from './services.js'
import styles from './RenderCompleteForm.module.css'
export default function RenderCompleteForm ({form}){
   const {home,teatro,tinglado,campoDeporte,otro} = form.data; 
    
    return(<Box className={styles.render}>
        <Typography variant='h6'>Datos Generales del Formulario</Typography>
        <Typography variant='body2'><strong>Formulario ID:</strong> {form.id}</Typography>
        <Typography variant='body2'><strong>Fecha de Creación</strong>: {convertirStringAFechaHora(form.createdAt)} </Typography>
        <Typography variant='body2'><strong>Última actualización:</strong> {convertirStringAFechaHora(form.updatedAt)} </Typography>

        <Typography variant='h6'>Datos del Remitente</Typography>
        <Typography variant='body2'><strong>Nombre:</strong> {home.nombreCompleto}</Typography>
        <Typography variant='body2'><strong>Email:</strong> {home.email}</Typography>
        <Typography variant='h6'>Detalles del Evento</Typography>
        <Typography variant='body2'><strong>Nombre:</strong> {home.nombreEvento}</Typography>
        <Typography variant='body2'><strong>Sector:</strong> {home.sector}</Typography>
        <Typography variant='body2'><strong>Fecha:</strong> {home.fecha}</Typography>
        <Typography variant='body2'><strong>Horario:</strong> {home.hora}</Typography>
        <Typography variant='body2'><strong>Lugar:</strong> {convertirLugar(home.lugar)}</Typography>
 


    </Box>)
}