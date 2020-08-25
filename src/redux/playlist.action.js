export const createPlaylist = (playlistname) => {
    return{
        type: 'CREATE_PLAY_LIST',
        playlistname
    }
}

export const addSongToPlayList = (name,data) => {
    return{
        type: 'ADD_SONG_TO_PLAYLIST',
        name,
        data
    }
}