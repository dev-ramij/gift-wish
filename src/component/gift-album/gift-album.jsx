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
                <Dialog open={this.props.open} TransitionComponent={Zoom} page={{border:'1px solid black'}}
                aria-labelledby="simple-dialog-title" onClose={this.props.close} >
                    <FlipPage orientation="horizontal"
                        pageBackground="cornsilk">
                        <article>
                            <div className="front-page">
                                <h3 className="header" style={{paddingTop:'100px'}}>
                                    Wishing you a very
                               </h3>
                                <br />
                                <p className="header-birthday">Happy Birthday</p>
                                <br />
                                <code>Please turn over the page</code>
                            </div>
                        </article>
                        <article>
                            <div className="page" style={{paddingTop:'50px'}}>
                                I am so glad I can call you mine
                            <br />
                                <br />
                            and you can call me yours
                            <br />
                                <br />
                            To love you and be loved by you
                            <br />
                                <br />
                            until the end of time is all this
                            <br />                                <br />
                                <br />
                            heart of mine desires.
                            <br />
                                <br />
                            Happy birthday, beautiful girl!
                            </div>
                        </article>
                        <article>
                            <img src='./pic1.jpg' className="album-image" alt='cant load' />
                        </article>
                        <article>
                            <div className="page" style={{paddingTop:'100px'}}>
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
                            <img src='./main-pic.jpg' className="album-image" alt='cant load' />
                        </article>
                        <article>
                            <div className="front-page">
                                <div className="header" style={{paddingTop:'200px'}}>
                                    ♥  ♥ Thank you so much for being part of my life  ♥  ♥                                     
                                </div>
                            </div>
                        </article>

                    </FlipPage>
                </Dialog>
            </>
        );
    }
}

export default GiftAlbum;