const defaultTitleState = []

export default (state=defaultTitleState,action) => {
    switch(action.type){
        case 'SET_TITLE':
            return[
                ...state,
                action.data
            ]
        default:
            return state;
    }
}