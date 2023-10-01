 import {Box,Typography, formControlClasses} from '@mui/material'
 // funcion para renderizar las propiedades de cada objeto
 export default function RenderObjectProperties({objeto}) {

 function render(objeto) {
        return  Object.keys(objeto).map((propiedad,index)=>{

            if(typeof objeto[propiedad]==='object'){
              return null;
            }else{
              const valor = objeto[propiedad];
              const valorRenderizado =
                typeof valor === 'boolean' ? valor.toString() : valor;
               return valor===false?null:<Typography variant='body2' key={index}>
               <strong>{propiedad}:</strong> &nbsp; 
               {valorRenderizado}
               </Typography>
            }

        })
    }


    return(<Box>
       {
         render(objeto)
       }

      {
        objeto.sobreEscenario&&<Box>
            <Typography variant='body2'><strong>DATOS SOBRE ESCENARIO</strong></Typography>
            {render(objeto.dataSobreEscenario)}
        </Box>
      }
      {
        objeto.bajoEscenario&&
        <Box>
            <Typography variant='body2'><strong>DATOS BAJO ESCENARIO</strong></Typography>
            {objeto.bajoEscenario&&render(objeto.dataBajoEscenario)}
        </Box>
      }
    
    </Box>)

    }