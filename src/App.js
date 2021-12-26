import {useRef} from 'react';
//useRef nos permite obtener referencias del mismo DOM
const App = () =>{
    //useRef devuelve un objeto current nulo pero luego de asignar esta propiedad a algun elemento vamos a obtener sus propiedades
    const ref = useRef()
    const inputRef = useRef()
    const click = () =>{
        //accedo a las propieades del elemento con la propiedad ref
        //seria como un document.getElementById
        console.log(ref.current.clientHeight)
        ref.current.innerHTML ="Chanchito Feliz"
    }
    const focus = () => {
        inputRef.current.focus()
    }
    return(
        // <div  onClick ={click} ref={ref}>
        //     lal
        // </div>
        <div>
            {/* para poder usar useRef debo pasar la propiedad dentro del objeto de esta manera tengo acceso a sus propiedades */}
            <input ref={inputRef}/>
            <button onClick={focus} > FOCUS</button>
            <div onClick={click} ref={ref} >LALA</div>
        </div>
    )
}


export default App
