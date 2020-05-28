import React from 'react';
import './designer-details-page.css'
import LeftPrimaryPictureStory from './components/left-primary-picture-story';
import LeftRectanglePrimaryPictureStory from './components/left-rectangle-primary-picture-story';
import OneMediaStory from './components/one-media-story';
import RightPrimaryPictureStory from './components/right-primary-picture-story';

class DesignerDetailsPageDesktop extends React.Component<any, any> {

    render() {
        return (
            <div className="designer-details-page-1">
                <div className="top-1">
                    <div className="background-container-1">
                        <img className="background-picture-1"></img>
                    </div>
                    <div className="header-1"></div>
                    <div className="designer-profile-container-1">
                        <div className="designer-profile-background-1">
                            <div className="row-1-background-1"></div>
                            <div className="row-2-background-1"></div>
                        </div>
                        <div className="designer-profile-min-spacing-1"></div>
                        <div className="designer-profile-second-container-1">
                            <div className="designer-profile-1">
                                <div className="row-1-1">
                                    <div className="photo-space-1"></div>
                                    <div className="text-profile-1">
                                        <div className="designer-name-1">Pierre Hardy</div>
                                        <div className="space-between-1"></div>
                                        <div className="designer-description-1">
                                            {'Turn to covetable Balmain womenswear for a vampish approach to feminine glamour. Military-inspired tailoring'}
                                            {' lends instant impact to tuxedo dresses and mini skirts, alongside signature blazer jackets.'}
                                        </div>
                                    </div>
                                </div>
                                <div className="row-2-1">
                                    <div className="photo-space-1"></div>
                                    <div className="brands-1">
                                        {
                                            Array.from(Array(4).keys()).map(_ => (
                                                <div className="brand-container-with-margin-right-1">
                                                    <div className="brand-1">
                                                        <div className="brand-logo-container-1">
                                                            <img className="brand-logo-1"></img>
                                                        </div>
                                                        <div className="brand-name-1"></div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        <div className="brand-container-without-margin-right-1">
                                            <div className="brand-1">
                                                <div className="brand-logo-container-1">
                                                    <img className="brand-logo-1"></img>
                                                </div>
                                                <div className="brand-name-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="photo-frame-1">
                                    <img className="photo-1"></img>
                                </div>
                            </div>
                        </div>
                        <div className="designer-profile-min-spacing-1"></div>
                    </div>
                </div>
                <div className="content-container-1">
                    <div className="content-spacing-1"></div>
                    <div className="content-1">
                        <div className="designer-stories-1">
                            <div className="designer-story-container-1">
                                <LeftPrimaryPictureStory />
                            </div>
                            <div className="designer-story-container-1">
                                <LeftRectanglePrimaryPictureStory />
                            </div>
                            <div className="designer-story-container-1">
                                <OneMediaStory />
                            </div>
                            <div className="designer-story-container-1">
                                <RightPrimaryPictureStory />
                            </div>
                        </div>
                        {/* <div className="featured-products-1"></div> */}
                    </div>
                    <div className="content-spacing-1"></div>
                </div>
                {/* <div className="footer-1"></div> */}
            </div>
        )
    }
}

export default DesignerDetailsPageDesktop