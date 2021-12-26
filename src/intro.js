
//componente funcional
// function App(){


// }
// const MiComponente = (props) => {
//   //obtengo las propiedades directamente de los argumentos de entrada
//   //en caso de no querer hacer destructuring. 
//   const {miProp} = props
//   return(
//     <div> 
//       Nombre : {miProp}
//     </div>
//   )
// }

//funcion impura son las que su ouput es distinto en todas las veces. Otra opcion podria ser consultar una api o base de datos
//se podria decir entonces que cuando no estoy seguro del resultado de una consulta. La base de datos no tiene resultados.
//son funciones impuras 
const impura = () => new Date().toLocaleString();

console.log(impura())

//los componentes funcionales son funciones puras 

const MiComponente = ({miProp}) => {
  //obtengo las propiedades directamente de los argumentos de entrada
  return(
    <div> 
      Nombre : {miProp}
    </div>
  )
}
const App = () =>{
  return(
    <MiComponente miProp={"chachito Feliz"}></MiComponente>
  )

}

export default App;



// //componente funcional
// // function App(){


// // }
// // const MiComponente = (props) => {
// //   //obtengo las propiedades directamente de los argumentos de entrada
// //   //en caso de no querer hacer destructuring. 
// //   const {miProp} = props
// //   return(
// //     <div> 
// //       Nombre : {miProp}
// //     </div>
// //   )
// // }

// //funcion impura son las que su ouput es distinto en todas las veces. Otra opcion podria ser consultar una api o base de datos
// //se podria decir entonces que cuando no estoy seguro del resultado de una consulta. La base de datos no tiene resultados.
// //son funciones impuras 
// const impura = () => new Date().toLocaleString();

// console.log(impura())

// //los componentes funcionales son funciones puras 

// const MiComponente = ({miProp}) => {
//   //obtengo las propiedades directamente de los argumentos de entrada
//   return(
//     <div> 
//       Nombre : {miProp}
//     </div>
//   )
// }
// const App = () =>{
//   return(
//     <MiComponente miProp={"chachito Feliz"}></MiComponente>
//   )

// }

// export default App;

