import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import LeftPrimaryPictureStory from './components/left-primary-picture-story'
import LeftRectanglePrimaryPictureStory from './components/left-rectangle-primary-picture-story'
import OneMediaStory from './components/one-media-story'
import RightPrimaryPictureStory from './components/right-primary-picture-story'
import Top from './components/top'

class _DesignerDetailsPageDesktop extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['designer-details-page']}>
                <Top />
                <div className='content-container'>
                    <div className='content-spacing'></div>
                    <div className='content'>
                        <div className='designer-stories'>
                            <div className='designer-story-container'>
                                <LeftPrimaryPictureStory />
                            </div>
                            <div className='designer-story-container'>
                                <LeftRectanglePrimaryPictureStory />
                            </div>
                            <div className='designer-story-container'>
                                <OneMediaStory />
                            </div>
                            <div className='designer-story-container'>
                                <RightPrimaryPictureStory />
                            </div>
                        </div>
                        {/* <div className='featured-products'></div> */}
                    </div>
                    <div className='content-spacing'></div>
                </div>
                {/* <div className='footer'></div> */}
            </div>
        )
    }
}

const DesignerDetailsPageDesktop = withStyles({
    'designer-details-page': {
        position: 'relative',
        width: '100vm',
        backgroundColor: '#a0a0a0',
        '& .content-container': {
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            '& .content-spacing': {
                position: 'relative',
                flexGrow: 1,
                flexShrink: 0,
                width: '3.750rem',
            },
            '& .content': {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                flexShrink: 1,
                width: '87.500rem',
                '& .designer-stories': {
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    '& .designer-story-container': {
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        marginTop: '4.992rem',
                        backgroundColor: '#909090',
                    },
                },
            },
        },
        '& .featured-products': {
            position: 'relative',
            height: '699px',
        },
        '& .footer': {
            position: 'relative',
            height: '298px',
        },
    }
})(_DesignerDetailsPageDesktop)

export default DesignerDetailsPageDesktop