import {  Container } from "@mui/material"
import Index from "./component/Index/Index"
import styles from './App.module.css'

function App() {

  return (
   <Container
   maxWidth='xl'
   className={styles.container}
   >
    <Index/>
   </Container>
  )
}

export default App
