import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import GiftAlbum from '../gift-album/gift-album';


class GiftBox extends Component {
    state = {
        openAlbum:false
    }

    toggleOpenOrCloseAlbum = ()=>{
        this.setState({
            openAlbum:!this.state.openAlbum
        })
    }
    render() {
        return (
            <>
                <Box component="span" m={1} onClick={this.toggleOpenOrCloseAlbum}>
                    <img src="./gift_gif.gif" alt="can't load image"/>
                </Box>
                <GiftAlbum open={this.state.openAlbum} close={this.toggleOpenOrCloseAlbum}/>
            </>);
    }
}

export default GiftBox;