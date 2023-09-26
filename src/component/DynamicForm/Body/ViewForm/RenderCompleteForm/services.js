export function convertirStringAFechaHora(stringFecha) {
    try {
      // Eliminar el carácter 'Z' al final del string
      const fechaSinZ = stringFecha.slice(0, -1);
      // Crear un objeto Date a partir del string
      const fechaHora = new Date(fechaSinZ);
      // Crear un nuevo objeto Date con la diferencia del huso horario local
      const fechaHoraLocal = new Date(fechaHora.getTime() - fechaHora.getTimezoneOffset() * 60000);
      // Devolver la fecha y hora en un formato legible
      return fechaHoraLocal.toLocaleString('es-ES', { timeZone: 'UTC' });
    } catch (error) {
      // En caso de que el string no tenga un formato válido
      return "Formato de fecha y hora no válido";
    }
  }

  
 export function convertirLugar(lugar){
 
    let result = "";
    for(const propiedad in lugar){
        if(lugar[propiedad]){
            result += `${propiedad} `
            
        }
    }

    return result;
 } 