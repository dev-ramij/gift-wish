import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import GiftAlbum from '../gift-album/gift-album';
import './gift-box.css'

class GiftBox extends Component {
    state = {
        openAlbum: false,
        open: false
    }

    toggleOpenOrCloseAlbum = () => {
        this.setState({
            openAlbum: !this.state.openAlbum,
            open: true
        })
    }
    render() {
        return (
            <>
                <Box component="span" m={1} onClick={this.toggleOpenOrCloseAlbum}>
                    {!this.state.open && <img src="./gift-close.png" className="gift-box-image jump" alt="can't load image" />}
                    {this.state.open && <img src="./gift-open.png" className="gift-box-image" alt="can't load image" />}
                </Box>
                <GiftAlbum open={this.state.openAlbum} close={this.toggleOpenOrCloseAlbum} />
            </>);
    }
}

export default GiftBox;