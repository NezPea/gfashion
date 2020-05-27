import React from 'react'
import './left-primary-picture-story.css'

class LeftPrimaryPictureStory extends React.Component {

    render() {
        return (
            <div className="story-container">
                <div className="primary-picture-container">
                    <div className="primary-picture-second-container">
                        <img className="primary-picture" src='http://localhost:3004/grey-wide.png'></img>
                    </div>
                </div>
                <div className="text-and-little-pictures-container">
                    <div className="text-and-little-pictures">
                        <div className="title">
                            {
                                'The home of hermes designer Pierre Hardy'
                            }
                        </div>
                        <div className="description">
                            {
                                '"This is happy, undeniably escapist collection," says Balmain creative director, Jonathan Anderson...'
                            }
                        </div>
                        <div className="little-pictures"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftPrimaryPictureStory