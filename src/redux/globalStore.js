import { createStore, combineReducers } from 'redux';

import AlbumsReducer from './albums.reducer';
import TitleReducer from './titles.reducer';
import FilterReducer from './filter.reducer';
import PlaylistReducer from './playlist.reducer';

const globalStore = () => {
    const state =  createStore(combineReducers({
        albums: AlbumsReducer,
        titles: TitleReducer,
        filter: FilterReducer,
        playlist: PlaylistReducer
    }));
    // state.subscribe(() => {
    //     console.log(state.getState())
    // });

    return state;
}

export default globalStore;