import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlaylist } from '../redux/playlist.action';
import Album from './Album';
import './Playlist.css';

class PlayLists extends Component{
    state = {
        showAlbum: false,
        name: '',
        album: [],
        playlistname: '',
        showForm: false
    }
    createPlaylist = () => {
        this.setState({showForm: !this.state.showForm})
    }
    addPlaylist = (e) => {
        e.preventDefault();
        this.props.newPlaylist(this.state.playlistname);
        this.setState({showForm: false})
    }
    showPlaylist = (name,albums) => {
        this.setState({
            name: name,
            album: albums,
            showAlbum: true
        })
    }
    render(){
        return(
            <div className="playlist-box">
                {
                    this.props.playlists.length > 0 ? 
                    <div className="list-box">
                    {
                        this.props.playlists.map((list,index) => {
                        return(
                        <div key={index} onClick={() => this.showPlaylist(list.name
                        ,list.albums )} className="playlist"
                        >{list.name}</div>
                        )})
                    }
                    </div> : 
                    <p>No Playlists Available Create One!</p>
                }
                <button className="btn btn-success" onClick={this.createPlaylist}>Create Playlist</button>
                { this.state.showAlbum && <Album name={this.state.name} 
                album={this.state.album}
                />}
                { this.state.showForm && <form onSubmit={this.addPlaylist}>
                    <input type="text" placeholder="Enter Playlist name" value={this.state.playlistname}
                    className="addPlaylistinput"
                    onChange={e => this.setState({playlistname: e.target.value})}
                    />
                    <button className="btn btn-primary m-2">Add</button>
                </form> }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        playlists: state.playlist
    }
}

const mapDispatchToProps = dispatch => {
    return{
        newPlaylist: (data) => dispatch(createPlaylist(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PlayLists);