import React, { Component } from 'react';
import { Dialog } from '@material-ui/core';
import FlipPage from 'react-flip-page';
import './gift-album.css';

class GiftAlbum extends Component {
    state = {
        imageItemURLs: []
    }

    componentWillMount() {
        let urls = [];
        for (let i = 0; i < 8; i++) {
            urls.push("./album/image" + i + ".jpg");
        }
        this.setState({
            imageItemURLs: urls
        })
    }

    render() {
        return (
            <>
                <Dialog open={this.props.open} aria-labelledby="simple-dialog-title" onClose={this.props.close}>
                    <FlipPage orientation="horizontal" width="480" flipOnTouchZone="250">
                        {
                            this.state.imageItemURLs.map(i =>
                                <article>
                                    <div className="photo-cover">
                                        <img className="album-image" src={i} alt="can't load" />
                                    </div>
                                </article>
                            )
                        }
                    </FlipPage>
                </Dialog>
            </>
        );
    }
}

export default GiftAlbum;