export const initialState = {
    logged:false,
    data:{}
}

export default function authReducer(state,action){
    // state: El estado actual de la información
    // action (type,payload): Los parametros que serán reducidos

    // Objetivo: Procesar el action y actualizar el estado (crear un nuevo objeto de estado)

    let newState

    switch (action.type) {
        case 'LOGIN':
            newState = {
                logged:true,
                data: action.payload
            }
            break;
        case 'LOGOUT':
            newState = {
                logged:false,
                data:{}
            }
            break;
        default:
            // newState = {
            //     ...state
            // } // Creando una copia del estado

            newState = state
            break;
    }

    return newState
}