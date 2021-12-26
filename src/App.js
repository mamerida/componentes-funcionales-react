import { useReducer ,useState } from "react"

//tengo que definir el estaod inicial del componente 
//ver como se mapea y ver como accedo a las propiedades del estado
// state={contador : 0 }

const inicial = {contador:0}


// para poder usar UseReducer tengo que generar una funcion que recibe un acumulador y un elemento 
// retorna el valor del nuevo acumulador
// action = { type : '<string>', payload : <Dato a eleccion any >  }
//useReducer se podria usar para acciones condicionales dentro del front  
const reducer = ( state, action ) => {  
    //que tipo de accion recibo?
    switch(action.type){
        case 'incrementar':
            return {contador: state.contador + 1 } //nuevo estado 
        case 'decrementar':
            return  {contador: state.contador - 1 }   
        case 'set':
            return {contador: action.payload}    
        default: 
            return state    
    }
}

const App = () =>{

    const [state, dispatch ] = useReducer(reducer, inicial)
    const [valor,setValor] = useState(0)
    return(
        <div>
            Contador: {state.contador}<br/>
            <input value={valor} onChange={(e)=>{setValor(e.target.value)}}/><br/>
            <button onClick={()=> dispatch({type:'incrementar'}) }>Más</button><br/>
            <button onClick={()=> dispatch({type:'decrementar'}) }>Menos</button><br/>
            <button onClick={()=> dispatch({type:'set',payload:valor}) }>SET</button><br/>
        </div>
    )
}

export default App 