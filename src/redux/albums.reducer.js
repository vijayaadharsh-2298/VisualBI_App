const defaultAlbumsState = []

export default (state=defaultAlbumsState,action) => {
    switch(action.type){
        case 'SET_ALBUM':
            return[
                ...state,
                action.data
            ]
        default:
            return state;
    }
}