import React from 'react';
import './designer-details-page.css'

class DesignerDetailsPageDesktop extends React.Component<any, any> {

    render() {
        return (
            <div className="designer-details-page">
                <div className="top">
                    <div className="background-container">
                        <img className="background-picture"></img>
                    </div>
                    <div className="header"></div>
                    <div className="designer-profile">
                        <div className="row-1">
                            <div className="text-profile">
                                <div className="designer-name">Pierre Hardy</div>
                                <div className="space-between"></div>
                                <div className="designer-description">
                                    {'Turn to covetable Balmain womenswear for a vampish approach to feminine glamour. Military-inspired tailoring'}
                                    {' lends instant impact to tuxedo dresses and mini skirts, alongside signature blazer jackets.'}
                                </div>
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="brands">
                                <div className="brand">
                                    <div className="brand-logo-container">
                                        <img className="brand-logo"></img>
                                    </div>
                                    <div className="brand-name"></div>
                                </div>
                            </div>
                        </div>
                        <div className="photo-frame">
                            <img className="photo"></img>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="designer-stories">
                        <div className="designer-story-container">
                        </div>
                    </div>
                    <div className="featured-products"></div>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}

export default DesignerDetailsPageDesktop