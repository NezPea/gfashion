import React from 'react'
import './left-rectangle-primary-picture-story.css'

class LeftRectanglePrimaryPictureStory extends React.Component<any, any> {

    render() {
        return (
            <div className="story-container-2">
                <div className="primary-picture-container-2">
                    <div className="primary-picture-second-container-2">
                        <img className="primary-picture-2" src='http://localhost:3004/grey-wide.png' alt="one picture"></img>
                    </div>
                </div>
                <div className="text-and-little-pictures-container-2">
                    <div className="text-and-little-pictures-2">
                        <div className="title-2">
                            {
                                'Daily Fashion'
                            }
                        </div>
                        <div className="description-2"></div>
                        <div className="little-pictures-2">
                            <div className="little-picture-container-2">
                                <img className="little-picture-2" src='http://localhost:3004/grey-wide.png' alt="one picture"></img>
                            </div>
                            <div className="little-picture-container-2">
                                <img className="little-picture-2" src='http://localhost:3004/grey-wide.png' alt="one picture"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftRectanglePrimaryPictureStory