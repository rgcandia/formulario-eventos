import {  Container } from "@mui/material"
import {Outlet} from 'react-router-dom'
import styles from './App.module.css'

function App() {

  return (
   <Container
   maxWidth='xl'
   className={styles.container}
   >
    <Outlet/>
   </Container>
  )
}

export default App
