import {createStore} from "redux"


const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Juan Carlitos",
      foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg",
    },
    {
      id: 2,
      nombre: "Beto Quiroga",
      foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg",
    },
    {
      id: 3,
      nombre: "Alejo Garcia",
      foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg",
    },
  ],
  titulares: [],
  suplentes: [],
};

const trainerReducer = (state = initialState,action) => {

  if (action.type === "AGREGAR_TITULAR"){
    return {
      ...state,
      titulares: state.titulares.concat(action.jugador),
      jugadores: state.jugadores.filter( j => j.id !== action.jugador.id)

      //state.titulares , estoy leyendo lo que ya tengo 
      //console.log(de la accion para fijart )
    }
  }

  if (action.type === "AGREGAR_SUPLENTE"){
    return {
      ...state,
      suplentes: state.suplentes.concat(action.jugador),
      jugadores: state.jugadores.filter( j => j.id !== action.jugador.id)

    
    }
  }

  if (action.type === "QUITAR_TITULAR"){
    return {
      ...state,
     titulares: state.titulares.filter( j => (j.id !==action.jugador.id)),
      jugadores: state.jugadores.concat(  action.jugador)

      
    }
  }

  if (action.type === "QUITAR_SUPLENTE"){
    return {
      ...state,
     suplentes: state.suplentes.filter( j => (j.id !==action.jugador.id)),
      jugadores: state.jugadores.concat(  action.jugador)

      
    }
  }
//el store es la unica fuente de la verdad 



 return state;
}



export default createStore(trainerReducer)