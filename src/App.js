
import {useState, useEffect, Component} from 'react'


const useContador = (inicial) =>{
    const [contador, setContador] = useState(inicial)
    const incrementar = () =>{
        setContador(contador + 1 )
    }

    return [contador,incrementar]
}

// const Interval=(contador) =>{
//     useEffect(()=>{
//         const i = setInterval(()=>{console.log(contador)},1000)
//         return () => clearInterval(i)
//     },[contador])
//     return(
//         <div>
//             Intervalo 
//         </div>
//     )
// }


class Interval extends Component{
    intervalo = ""
    componentDidMount(){
        this.intervalo = setInterval(()=>{console.log(this.props.contador)},1000)
    }
    componentWillUnmount(){
        clearInterval(this.intervalo)
    }
    render(){
        return(
            <p>Intervalo</p>
        )
    }
}

const App =  () => {
    const [contador,incrementar] = useContador(0)
    useEffect(() =>{
        document.title = contador
    },[contador])
    return(
        <div>
            Contador: {contador}<br/>
            <button onClick={incrementar}> Incrementar </button>
            {/* <Interval contador={contador}/> */}
        </div>
    )
}




export default App


// import {useState, useEffect} from 'react'


// const useContador = (inicial) =>{
//     const [contador, setContador] = useState(inicial)
//     const incrementar = () =>{
//         setContador(contador + 1 )
//     }

//     return [contador,incrementar]
// }

// const App =  () => {
//     const [contador,incrementar] = useContador(0)
//     //useEffect funcion que recibe la funcion y dependencias del mismo. Si no se ejecutara en cualquier cambio que ocurra 
//     //sirve para hacer acciones post creacion de componente
//     //en caso de pasarle por ejemplo un arreglo vacio. Se ejecetura una vez 
//     //si quiero ejecutarlo cuando cmabie algun variable tengo que pasarlo dentro de ese array 
//     useEffect(() =>{
//         document.title = contador
//     },[contador])
//     return(
//         <div>
//             Contador: {contador}<br/>
//             <button onClick={incrementar}> Incrementar </button>
//         </div>
//     )
// }




// export default App



// import {useState, useEffect} from 'react'


// const useContador = (inicial) =>{
//     const [contador, setContador] = useState(inicial)
//     const incrementar = () =>{
//         setContador(contador + 1 )
//     }

//     return [contador,incrementar]
// }

// const Interval=(contador) =>{
//     useEffect(()=>{
//         const i = setInterval(()=>{console.log(contador)},1000)
//         //desuscribirse al setInterval cuando se cambie el valro de i asi podemos imprimir el nuevo valor de contador
//         //se ejecuta el clearInterval cada vez que cambie i 
//         return () => clearInterval(i)
//     },[contador])
//     return(
//         <div>
//             Intervalo 
//         </div>
//     )
// }


// const App =  () => {
//     const [contador,incrementar] = useContador(0)
//     //useEffect funcion que recibe la funcion y dependencias del mismo. Si no se ejecutara en cualquier cambio que ocurra 
//     //sirve para hacer acciones post creacion de componente
//     //en caso de pasarle por ejemplo un arreglo vacio. Se ejecetura una vez 
//     //si quiero ejecutarlo cuando cmabie algun variable tengo que pasarlo dentro de ese array 
//     useEffect(() =>{
//         document.title = contador
//     },[contador])
//     return(
//         <div>
//             Contador: {contador}<br/>
//             <button onClick={incrementar}> Incrementar </button>
//             {/* <Interval contado={contador}/> */}
//         </div>
//     )
// }




// export default App
