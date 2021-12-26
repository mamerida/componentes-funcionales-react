import {useState, useEffect} from 'react'


const useContador = (inicial) =>{
    const [contador, setContador] = useState(inicial)
    const incrementar = () =>{
        setContador(contador + 1 )
    }

    return [contador,incrementar]
}

const App =  () => {
    const [contador,incrementar] = useContador(0)
    //useEffect funcion que recibe la funcion y dependencias del mismo. Si no se ejecutara en cualquier cambio que ocurra 
    //sirve para hacer acciones post creacion de componente
    //en caso de pasarle por ejemplo un arreglo vacio. Se ejecetura una vez 
    //si quiero ejecutarlo cuando cmabie algun variable tengo que pasarlo dentro de ese array 
    useEffect(() =>{
        document.title = contador
    },[contador])
    return(
        <div>
            Contador: {contador}<br/>
            <button onClick={incrementar}> Incrementar </button>
        </div>
    )
}




export default App