import { Box , Typography, FormControlLabel,Checkbox, TextField, FormGroup, MenuItem} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './TeatroForm.module.css'
export default function TeatroForm(){
  //instanciase
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);
  const itemsFondoEscenario = [
    {name:'5 paneles',label:'5 paneles'},
    {name:'7 paneles',label:'7 paneles'},
    {name:'s/fondo',label:'sin fondo'}
  ]
  //funciones
              //funcion manejadora del dispatch 
  const handleChange = (e) => {

    const { value, id } = e.target;
    if(value>=0){
      dispatch(updateForm({ ...formData, teatro: {...formData.teatro,[id]: value } }));
    }
    

  };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
console.log(value)
dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    if(value>=0){

      dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[id]:value}}}))
    }
  }

  const handleCheckChangeSobreEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[name]:checked}}}))
  }  
  const handleChangeBajoEscenario =(e)=>{
    const {value,id,type} = e.target;
    if(type==='number' && value >= 0 || type==='textarea'){
      dispatch(updateForm({...formData,teatro:{...formData.teatro,dataBajoEscenario:{...formData.teatro.dataBajoEscenario,[id]:value}}}))
    }
    
  }
  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,dataBajoEscenario:{...formData.teatro.dataBajoEscenario,[name]:checked}}}))
  }  

  return (<Box className={styles.teatro}>
  <Box >
         <Typography><strong>Sección Teatro</strong></Typography>
 </Box>

    <Box className={styles.bodyTeatro}>
    <Box  className={styles.padres}>
    <FormControlLabel
      label={<Typography variant='body1'>Padres</Typography>}
      control={<Checkbox
        checked={formData?.teatro.padres || false}
        name='padres'
        onChange={handleCheckChange}
      />}
    />
    {
      formData.teatro.padres &&
      <TextField
      id='cantidadPadres'
      type='number'
      label='Cantidad Padres'
      value={formData?.teatro.cantidadPadres || ""}
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
   <Box className={styles.alumnos}>
   <FormControlLabel
      label={<Typography variant='body1' >Alumnos</Typography>}
      control={<Checkbox
      checked={formData?.teatro.alumnos || false}
      name='alumnos'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.teatro.alumnos&&
      <TextField
      id='cantidadAlumnos'
      type='number'
      label='Cantidad Alumnos'
      value={formData?.teatro.cantidadAlumnos || ""}
      onChange={handleChange}
      fullWidth
      />
    }

   </Box>
    <Box  >
    <FormControlLabel
      label={<Typography variant='body1' sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Sobre el Escenario</Typography>}
      control={<Checkbox
      checked={formData?.teatro.sobreEscenario || false}
      name='sobreEscenario'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.teatro.sobreEscenario &&
      <Box className={styles.sobreEscenario}>
         <TextField
         select
         name='fondoEscenario'
         label='Fondo de escenario blanco'
         onChange={handleChangeSelecFondo}
         value={formData?.teatro.dataSobreEscenario.fondoEscenario}
         fullWidth
         defaultValue='sin fondo'
         >
          <MenuItem value="5 paneles">5 paneles</MenuItem>
        <MenuItem value="7 paneles">7 paneles</MenuItem>
        <MenuItem value="sin fondo">sin fondo</MenuItem>
        
         </TextField>
         <TextField
         id="mesas"
         type='number'
         label='Mesas(cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.mesas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='Pupitres'
         type="number"
         label='Pupitres(cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.Pupitres || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         select
         name='manteles'
         label='Manteles'
         fullWidth
         defaultValue='Ninguno'
         value={formData?.teatro.dataSobreEscenario.manteles }
         onChange={handleChangeSelecFondo}
         >
          <MenuItem value='Azul'>Azul</MenuItem>
          <MenuItem value='Blanco'>Blanco</MenuItem>
          <MenuItem value='Ninguno'>Ninguno</MenuItem>
         </TextField>
         <TextField
         id='sillas'
         type='number'
         label='Sillas'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.sillas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='gradas'
         type='number'
         label='Gradas'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.gradas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono inalámbrico (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.microfonoInalambrico || ""}
         onChange={handleChangeSobreEscenario}
         />
           
       <Box sx={{width:'100%'}}>

       <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.pieMicrofono || false}
      name='pieMicrofono'
      onChange={handleCheckChangeSobreEscenario}
      
      />}
    />
       </Box>
          
          <TextField
         id='lucesYPulsadores'
         type='number'
         label='Luces y pulsadores'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.lucesYPulsadores || ""}
         onChange={handleChangeSobreEscenario}
         />
           <TextField
         id='alargues'
         type='number'
         label='Alargues(cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.alargues || ""}
         onChange={handleChangeSobreEscenario}
         />
      
<Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
<FormControlLabel
      label='Proyector sobre escenario'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
        <FormControlLabel
      label='Puntero'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.puntero || false}
      name='puntero'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
 
 <FormControlLabel
      label='Pantalla'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.pantalla || false}
      name='pantalla'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
     <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />

</Box>
    
      </Box>
    }
    </Box>

    <Box >
    <FormControlLabel
      label={<Typography variant='body1' sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Bajo el Escenario</Typography>}
      control={<Checkbox
      checked={formData?.teatro.bajoEscenario || false}
      name='bajoEscenario'
      onChange={handleCheckChange}
      />}
    />
    {formData.teatro.bajoEscenario &&
    <Box className={styles.bajoEscenario}>
       <TextField
         id='pupitres'
         type='number'
         label='Pupitres (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.pupitres || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='manteles'
         type='number'
         label='Manteles (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.manteles || ""}
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.sillas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.gradas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tarimas'
         type='number'
         label='Tarimas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.tarimas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono Inalambrico (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.microfonoInalambrico || ""}
         onChange={handleChangeBajoEscenario}
         />
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>

         <FormControlLabel
      label='Proyector Arriba'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

<FormControlLabel
      label='Fondo de prensa'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Alargue'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.alargue || false}
      name='alargue'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Aire Acondicionado'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.aireAcondicionado || false}
      name='aireAcondicionado'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Café'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.cafe || false}
      name='cafe'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Agua caliente'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.aguaCaliente || false}
      name='aguaCaliente'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Té'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.te || false}
      name='te'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Jarra con agua y hielo'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.jarraAguaHielo || false}
      name='jarraAguaHielo'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Azúcar'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.azucar || false}
      name='azucar'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Edulcorante'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.edulcorante || false}
      name='edulcorante'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Vasos plásticos (frio)'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.vasosPlasticos || false}
      name='vasosPlasticos'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    
    <FormControlLabel
      label='Vasos telgopor (calor)'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.vasosTelgopor || false}
      name='vasosTelgopor'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
  <FormControlLabel
      label='Vasos vidrio'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.vasoVidrio || false}
      name='vasoVidrio'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
      <FormControlLabel
      label='Batidores'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.batidores || false}
      name='batidores'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Servilleta'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.servilleta || false}
      name='servilleta'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
         </Box>
    
    <TextField
         id='sandwichesMiga'
         type='number'
         label='Sandwiches de miga (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.sandwichesMiga || ""}
         onChange={handleChangeBajoEscenario}
         />
    <TextField
         id='medialunas'
         type='number'
         label='Medialunas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.medialunas || ""}
         onChange={handleChangeBajoEscenario}
         />

        <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         value={formData?.teatro.dataBajoEscenario.musica || ""}
         helperText="En el caso de canciones patrias, aclarar cuáles son y el orden.
         Resto de la música entregar en pendrive en formato mp3, enumeradas conforme al orden en que serán 
         reproducidas en el acto"
         />
      <TextField
         id='video'
         label='Video o presentación'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         value={formData?.teatro.dataBajoEscenario.video || ""}
         helperText="En el caso de utilizar proyector, entregar los archivos en pendrive en formato mp4(video)
          o pdf (presentacion power point). Si se llegara a usar más de un video, enumerarlos conforme
          al orden en que serán reproducidos en el acto"
         />
    <TextField
         id='observacionesComunicaciones'
         label='Observaciones Comunicaciones'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesComunicaciones || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />

          <TextField
         id='observacionesCocina'
         label='Observaciones Cocina'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesCocina || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesCompras || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesMantenimiento'
         label='Observaciones Mantenimiento'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesMantenimiento || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
    </Box>
    }
    
    </Box>

    </Box>
    
    

    
    
 

  </Box>)
}