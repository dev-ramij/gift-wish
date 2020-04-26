import React, { Component } from 'react';
import { Dialog } from '@material-ui/core';
import FlipPage from 'react-flip-page';
import Zoom from '@material-ui/core/Zoom';
import './gift-album.css';

class GiftAlbum extends Component {
    state = {
        imageItemURLs: []
    }
    render() {
        return (
            <>
                <Dialog open={this.props.open} TransitionComponent={Zoom} aria-labelledby="simple-dialog-title" onClose={this.props.close} >
                    <FlipPage orientation="horizontal"
                        pageBackground="cornsilk">
                        <article>
                            <div className="front-page">
                                <h3 className="header">
                                    Wishing you a very
                               </h3>
                                <br />
                                <p className="header-birthday">Happy Birthday</p>
                                <br />
                                <code>Please turn over the page</code>
                            </div>
                        </article>
                        <article>
                            <div className="page">
                                I am so glad I can call you mine
                            <br />
                            and you can call me yours
                            <br />
                            To love you and be loved by you
                            <br />
                            until the end of time is all this
                            <br />
                            heart of mine desires.
                            <br />
                            Happy birthday, beautiful girl!
                            </div>
                        </article>
                        <article>
                            <div className="page">
                                আর একটা বছর এসে গেলো
                                <br />
                                <br />
                                বেড়ে যাবে আর একটা মোমবাতি ।
                                <br />
                                <br />
                                কাল ও ছিলাম আজ ও আছি
                                <br />
                                <br />
                                তোমার জন্মদিনের সাথী ।
                            </div>

                        </article>
                        <article>
                            <img src='./main-pic.jpg' className="album-image" alt='cant load'/>
                        </article>

                    </FlipPage>
                </Dialog>
            </>
        );
    }
}

export default GiftAlbum;