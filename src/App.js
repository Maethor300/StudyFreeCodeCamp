import './App.css';
import imagen from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/contador';
import { useState } from 'react';
function App() {

  const [numClicks, setNumClicks] = useState(0); 
   const clickInClick =() =>{
    setNumClicks(numClicks + 1);
   }
   const reiniciarClick = () =>{
    setNumClicks(0)
   }
  return (
  <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
       <img className ='freecodecamp-logo' src={imagen} alt= 'logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
         <Boton 
         texto = 'Click'
         darClick = {true}
         evento = {clickInClick}
         /> 
         <Boton
         texto = 'Reiniciar'
         darClick={false}
         evento = {reiniciarClick}
         />
       </div>  
    </div>
  );
}

export default App;
