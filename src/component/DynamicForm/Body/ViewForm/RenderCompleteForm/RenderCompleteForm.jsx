import { Box , Typography} from "@mui/material"
import {
    convertirLugar,
    convertirStringAFechaHora,

} from './services.js'
export default function RenderCompleteForm ({form}){
   const {home,teatro,tinglado,campoDeporte,otro} = form.data; 
    
    return(<Box>
        <Typography variant='h6'>Datos Generales del Formulario</Typography>
        <Typography variant='body2'>Formulario ID: {form.id}</Typography>
        <Typography variant='body2'>Fecha de Creación: {convertirStringAFechaHora(form.createdAt)} </Typography>
        <Typography variant='body2'>Última actualización: {convertirStringAFechaHora(form.updatedAt)} </Typography>

        <Typography variant='h6'>Datos del Remitente</Typography>
        <Typography variant='body2'>Nombre: {home.nombreCompleto}</Typography>
        <Typography variant='body2'>Email: {home.email}</Typography>
        <Typography variant='h6'>Detalles del Evento</Typography>
        <Typography variant='body2'>Nombre: {home.nombreEvento}</Typography>
        <Typography variant='body2'>Sector: {home.sector}</Typography>
        <Typography variant='body2'>Fecha: {home.fecha}</Typography>
        <Typography variant='body2'>Horario: {home.hora}</Typography>
        <Typography variant='body2'>Lugar: {convertirLugar(home.lugar)}</Typography>

    </Box>)
}