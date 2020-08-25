import React, { Component } from 'react';
import { connect } from 'react-redux';
import './homepage.css';
import { setText } from '../redux/filter.action';
import SearchSongSelector from '../search-songs.selector';
import { addSongToPlayList } from '../redux/playlist.action';

class HomePage extends Component{
    state ={
        vale: '',
        showDropDown: false
    }
    addToPlaylist = (e,album) => {
        this.setState({value: e.target.value,showDropDown: false});
        this.props.setSongToPlaylist(e.target.value,album)
    }
    render(){
        return(
            <div className="song-box">
            <input type="text" placeholder="Search..." className="form-control" 
                onChange={e => this.props.setText(e.target.value)}
            />
            {
                this.props.albums.map(album => (
                    <div key={album.id} className="albumcard">
                        <p>{album.title}</p>
                        <img src={album.thumbnailUrl} alt="no avatar" />
                        <br />
                        <button onClick={() => this.setState({showDropDown: !this.state.showDropDown})}>Add to Playlist</button>
                        {
                            this.state.showDropDown && 
                            <div>
                            {
                                this.props.playlists.length > 0 ?
                                <select value={this.state.value} onChange={e => this.addToPlaylist(e,album)}>
                                <option value="default">Select</option>
                                {
                                    this.props.playlists.map((list,i) => (
                                        <option key={i} value={list.name}>{list.name}</option>
                                    ))
                                } 
                                </select> : <p>No Playlists available</p> 
                            }
                            </div> 
                        }
                    </div>
                ))
            }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        albums: SearchSongSelector(state.albums,state.filter.text),
        titles: state.titles,
        playlists: state.playlist 
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setText: (e) => dispatch(setText(e)),
        setSongToPlaylist: (data,album) => dispatch(addSongToPlayList(data,album))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);