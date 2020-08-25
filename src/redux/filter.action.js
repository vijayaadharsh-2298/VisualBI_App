export const setText = (text) => {
    return{
        type: 'SET_TEXT',
        text
    }
}

export const setSortBy = (sortBy) => {
    return{
        type: 'SET_SORTBY',
        sortBy
    }
}