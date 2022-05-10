const INITIAL_STATE = {
    DATA:[],
}

const PlayerReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ){
        case 'LIKE_BUTTON_CHANGE':
            return { ...state, DATA: action.payload }
        default :
            return  state 
    }
}

export default PlayerReducer;