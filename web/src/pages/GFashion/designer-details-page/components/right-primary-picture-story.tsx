import React from 'react'
import './right-primary-picture-story.css'

class RightPrimaryPictureStory extends React.Component {

    render() {
        return (
            <div className="story-container-5">
                <div className="text-and-little-pictures-container-5">
                    <div className="text-and-little-pictures-5">
                        <div className="title-5">
                            {
                                'How I Built a Career in Fashion'
                            }
                        </div>
                        <div className="description-5"></div>
                        <div className="little-pictures-5">
                            <div className="little-picture-container-5">
                                <img className="little-picture-5" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                            <div className="little-picture-container-5">
                                <img className="little-picture-5" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                            <div className="little-picture-container-5">
                                <img className="little-picture-5" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                            <div className="little-picture-container-5">
                                <img className="little-picture-5" src='http://localhost:3004/grey-wide.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="primary-picture-container-5">
                    <div className="primary-picture-second-container-5">
                        <img className="primary-picture-5" src='http://localhost:3004/grey-wide.png'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default RightPrimaryPictureStory