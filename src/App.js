import {useState} from 'react'

//reglas de los Hooks:
// ESTAS NO SE PUEDEM DEFINIR EN LOOPS ni en condicionales
//Solo se llaman en dos partes. 
//Componente de react 
//custom hooks
// cuando creemos un custom hook empieza como use<Nombre>

const App =  () => {
    const [contador, setContador] = useState(0)
    return(
        <div>
            Contador: {contador}<br/>
            <button onClick={()=> setContador(contador + 1)}> Incrementar </button>
        </div>
    )
}

export default App