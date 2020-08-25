const defaultFilterState = {
    text: '',
    sortBy: 'date'
}

export default (state=defaultFilterState,action) => {
    switch(action.type){
        case 'SET_TEXT':
            return{
                ...state,
                text: action.text
            }
        case 'SET_SORTBY':
            return{
                ...state,
                sortBy: action.sortBy
            }
        default:
            return state;
    }
}