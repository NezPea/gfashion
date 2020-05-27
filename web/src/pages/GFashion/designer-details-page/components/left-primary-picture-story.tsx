import React from 'react'
import './left-primary-picture-story.css'

class LeftPrimaryPictureStory extends React.Component {

    render() {
        return (
            <div className="story-container-3">
                <div className="primary-picture-container-3">
                    <div className="primary-picture-second-container-3">
                        <img className="primary-picture-3" src='http://localhost:3004/grey-wide.png'></img>
                    </div>
                </div>
                <div className="text-and-little-pictures-container-3">
                    <div className="text-and-little-pictures-3">
                        <div className="title-3">
                            {
                                'The home of hermes designer Pierre Hardy'
                            }
                        </div>
                        <div className="description-3">
                            {
                                '"This is happy, undeniably escapist collection," says Balmain creative director, Jonathan Anderson...'
                            }
                        </div>
                        <div className="little-pictures-3">
                            <div className="little-picture-container-3">
                                <img className="little-picture-3" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                            <div className="little-picture-container-3">
                                <img className="little-picture-3" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                            <div className="little-picture-container-3">
                                <img className="little-picture-3" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                            <div className="little-picture-container-3">
                                <img className="little-picture-3" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftPrimaryPictureStory