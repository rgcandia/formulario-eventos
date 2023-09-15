import io from "socket.io-client";
let socket;
const apiUrlDeploy = import.meta.env.VITE_URL_API_DEPLOY;
const apiUrlDev = "http://localhost:4001/";
const apiUrl = import.meta.env.PROD ? apiUrlDeploy : apiUrlDev;

// inicia socket con el usuario en el evento join
export const initSocket = (user)=>{

   

    socket = io(apiUrl,{transports:['websocket']})
    console.log('Connecting socket...')
    if (socket && user) {
        socket.emit("join", user);
      }
}
export const listenerUser = (email,dispatch,action)=>{
  socket.on(email,(value)=>{
  dispatch(action(value))
  })
}

export const listenerForms = (dispatch,action)=>{
  socket.on('forms',(value)=>{
  dispatch(action(value))
  })
}

