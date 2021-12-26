import {Component, useState} from 'react'

//reglas de los Hooks:
// ESTAS NO SE PUEDEM DEFINIR EN LOOPS ni en condicionales
//Solo se llaman en dos partes. 
//Componente de react 
//custom hooks
// cuando creemos un custom hook empieza como use<Nombre>


//Componentes funcionales vs componentes de clase 

class App extends Component{
    state ={
        contador:0
    }
    incrementar = () =>{
        this.setState ({contador : this.state.contador + 1 })
    }
    render(){
        return(
            <div>
                contador: {this.state.contador}<br/>
                <button onClick={this.incrementar}>Incrementar </button>
            </div>
        )
    }
}

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


// import {Component, useState} from 'react'

// //reglas de los Hooks:
// // ESTAS NO SE PUEDEM DEFINIR EN LOOPS ni en condicionales
// //Solo se llaman en dos partes. 
// //Componente de react 
// //custom hooks
// // cuando creemos un custom hook empieza como use<Nombre>


// //Componentes funcionales vs componentes de clase 

// class App extends Component{
//     state ={
//         contador:0
//     }
//     incrementar = () =>{
//         this.setState ({contador : this.state.contador + 1 })
//     }
//     render(){
//         return(
//             <div>
//                 contador: {this.state.contador}<br/>
//                 <button onClick={this.incrementar}>Incrementar </button>
//             </div>
//         )
//     }
// }

// const App =  () => {
//     const [contador, setContador] = useState(0)
//     return(
//         <div>
//             Contador: {contador}<br/>
//             <button onClick={()=> setContador(contador + 1)}> Incrementar </button>
//         </div>
//     )
// }




// export default App