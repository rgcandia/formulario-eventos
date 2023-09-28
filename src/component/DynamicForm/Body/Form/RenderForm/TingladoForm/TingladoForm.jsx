import { Box , Typography, FormControlLabel,Checkbox, TextField, MenuItem} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './TingladoForm.module.css'
export default function TingladoForm(){
  //instanciase
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);

  //funciones
              //funcion manejadora del dispatch 
  const handleChange = (e) => {
    const { value, id } = e.target;
    if(value>=0){

      dispatch(updateForm({ ...formData, tinglado: {...formData.tinglado,[id]: value } }));
    }
  };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,tinglado:{...formData.tinglado,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataSobreEscenario:{...formData.tinglado.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    if(value>=0){

      dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataSobreEscenario:{...formData.tinglado.dataSobreEscenario,[id]:value}}}))
    }
  }

  const handleCheckChangeSobreEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataSobreEscenario:{...formData.tinglado.dataSobreEscenario,[name]:checked}}}))
  }  
  const handleChangeBajoEscenario =(e)=>{
    const {value,id,type} = e.target;
    if(type==='number' && value >= 0 || type==='textarea'){

      dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataBajoEscenario:{...formData.tinglado.dataBajoEscenario,[id]:value}}}))
    }
  }
  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataBajoEscenario:{...formData.tinglado.dataBajoEscenario,[name]:checked}}}))
  }  

  return (<Box className={styles.tinglado}>
  <Box >
         <Typography><strong>Sección Tinglado</strong></Typography>
 </Box>
 
    <Box className={styles.bodyTinglado}>

    <Box className={styles.padres}>
    <FormControlLabel
         label={<Typography variant='body2'><strong>Padres</strong></Typography>}
      control={<Checkbox
        checked={formData?.tinglado.padres || false}
        name='padres'
        onChange={handleCheckChange}
      />}
    />
     {
      formData.tinglado.padres &&
      <TextField
      id='cantidadPadres'
      type='number'
      label='Cantidad Padres'
      value={formData.tinglado.cantidadPadres || ""}
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
    <Box className={styles.alumnos}>
    <FormControlLabel
      label={<Typography variant='body2' ><strong>Alumnos</strong></Typography>}
      control={<Checkbox
      checked={formData?.tinglado.alumnos || false}
      name='alumnos'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.tinglado.alumnos&&
      <TextField
      id='cantidadAlumnos'
      type='number'
      label='Cantidad Alumnos'
      value={formData.tinglado.cantidadAlumnos || ""}
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
  

    <Box > 
   <Typography variant='body2'><strong>SOBRE EL ESCENARIO</strong></Typography>
    <FormControlLabel
       label={<Typography variant='body2' >Tildar para completar los items necesarios sobre el escenario</Typography>}
      control={<Checkbox
      checked={formData?.tinglado.sobreEscenario || false}
      name='sobreEscenario'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.tinglado.sobreEscenario &&
      <Box className={styles.sobreEscenario}>
         <TextField
         select
         name='fondoEscenario'
         label='Fondo de escenario blanco'
         onChange={handleChangeSelecFondo}
         value={formData?.tinglado.dataSobreEscenario.fondoEscenario}
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
         label='Sillas(cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.mesas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='Pupitres'
         type="number"
         label='Pupitres(cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.Pupitres || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         select
         name='manteles'
         label='Manteles'
         fullWidth
         defaultValue='Ninguno'
         value={formData?.tinglado.dataSobreEscenario.manteles}
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
         value={formData?.tinglado.dataSobreEscenario.sillas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='gradas'
         type='number'
         label='Gradas'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.gradas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono inalámbrico (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.microfonoInalambrico || ""}
         onChange={handleChangeSobreEscenario}
         />
    <Box sx={{width:'100%'}}>
    <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.pieMicrofono || false}
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
         value={formData?.tinglado.dataSobreEscenario.lucesYPulsadores || ""}
         onChange={handleChangeSobreEscenario}
         />
           <TextField
         id='alargues'
         type='number'
         label='Alargues(cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.alargues || ""}
         onChange={handleChangeSobreEscenario}
         />
      
   <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
   <FormControlLabel
      label='Proyector sobre escenario'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
        <FormControlLabel
      label='Puntero'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.puntero || false}
      name='puntero'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
 
 <FormControlLabel
      label='Pantalla'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.pantalla || false}
      name='pantalla'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
     <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
   </Box>
    
      </Box>
    }
    </Box>

    <Box>
   <Typography variant='body2' ><strong>BAJO EL ESCENARIO</strong></Typography>
    <FormControlLabel
      label={<Typography variant='body2'>Tildar para completar los items necesarios bajo el escenario</Typography>}
      control={<Checkbox
      checked={formData?.tinglado.bajoEscenario || false}
      name='bajoEscenario'
      onChange={handleCheckChange}
      />}
    />
    {formData.tinglado.bajoEscenario &&
    <Box  className={styles.bajoEscenario}>
       <TextField
         id='pupitres'
         type='number'
         label='Pupitres (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.pupitres || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='manteles'
         type='number'
         label='Manteles (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.manteles || ""}
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.sillas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.gradas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tarimas'
         type='number'
         label='Tarimas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.tarimas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono Inalambrico (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.microfonoInalambrico || ""}
         onChange={handleChangeBajoEscenario}
         />
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
      <FormControlLabel
      label='Proyector Arriba'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

<FormControlLabel
      label='Fondo de prensa'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Alargue'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.alargue || false}
      name='alargue'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Aire Acondicionado'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.aireAcondicionado || false}
      name='aireAcondicionado'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Café'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.cafe || false}
      name='cafe'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Agua caliente'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.aguaCaliente || false}
      name='aguaCaliente'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Té'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.te || false}
      name='te'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Jarra con agua y hielo'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.jarraAguaHielo || false}
      name='jarraAguaHielo'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Azúcar'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.azucar || false}
      name='azucar'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Edulcorante'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.edulcorante || false}
      name='edulcorante'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Vasos plásticos (frio)'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.vasosPlasticos || false}
      name='vasosPlasticos'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    
    <FormControlLabel
      label='Vasos telgopor (calor)'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.vasosTelgopor || false}
      name='vasosTelgopor'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
  <FormControlLabel
      label='Vasos vidrio'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.vasoVidrio || false}
      name='vasoVidrio'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
      <FormControlLabel
      label='Batidores'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.batidores || false}
      name='batidores'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Servilleta'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.servilleta || false}
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
         value={formData?.tinglado.dataBajoEscenario.sandwichesMiga || ""}
         onChange={handleChangeBajoEscenario}
         />
    <TextField
         id='medialunas'
         type='number'
         label='Medialunas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.medialunas || ""}
         onChange={handleChangeBajoEscenario}
         />

        <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         value={formData?.tinglado.dataBajoEscenario.musica || ""}
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
         value={formData?.tinglado.dataBajoEscenario.video || ""}
         helperText="En el caso de utilizar proyector, entregar los archivos en pendrive en formato mp4(video)
          o pdf (presentacion power point). Si se llegara a usar más de un video, enumerarlos conforme
          al orden en que serán reproducidos en el acto"
         />
    <TextField
         id='observacionesComunicaciones'
         label='Observaciones Comunicaciones'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesComunicaciones || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />

          <TextField
         id='observacionesCocina'
         label='Observaciones Cocina'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesCocina || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesCompras || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesMantenimiento'
         label='Observaciones Mantenimiento'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesMantenimiento || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
    </Box>
    }
    
    </Box>

    </Box>
    
    

    
    
 

  </Box>)
}