const initialPlaylist = [];

export default (state=initialPlaylist,action) => {
    switch(action.type){
        case 'CREATE_PLAY_LIST':
            return[
                ...state,
                {
                    name: action.playlistname,
                    albums: []
                }
            ]
        case 'ADD_SONG_TO_PLAYLIST':
            return state.map(alb => {
                if(alb.name === action.name){
                    return{
                        ...alb,
                        albums: [...alb.albums,action.data]
                    }
                }
                return null;
            })
        default:
            return state;
    }
}