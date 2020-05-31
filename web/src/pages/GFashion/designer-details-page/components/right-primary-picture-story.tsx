import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import story4primary from 'src/assets/images/story-4-primary.png'
import story4little1 from 'src/assets/images/story-4-little.png'
import story4little2 from 'src/assets/images/story-4-little-2.png'
import story4little3 from 'src/assets/images/story-4-little-3.png'
import story4little4 from 'src/assets/images/story-4-little-4.png'
import playIcon from 'src/assets/images/play.png'

class _RightPrimaryPictureStory extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['story-container']}>
                <div className='text-and-little-pictures-container'>
                    <div className='text-and-little-pictures'>
                        <div className='title'>
                            {
                                'How I Built a Career in Fashion'
                            }
                        </div>
                        <div className='description'></div>
                        <div className='little-pictures'>
                            <div className='little-picture-container'>
                                <img className='little-picture' src={story4little1} alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src={story4little2} alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src={story4little3} alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src={story4little4} alt='one'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='primary-picture-container'>
                    <div className='primary-picture-second-container'>
                        <img className='primary-picture' src={story4primary} alt='one'></img>
                        <img className='play-icon' src={playIcon} alt='playIcon'></img>
                    </div>
                </div>
            </div>
        )
    }
}

const RightPrimaryPictureStory = withStyles({
    'story-container': {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        '& .text-and-little-pictures-container': {
            position: 'relative',
            flexGrow: 1,
            flexShrink: 0,
            width: '43.750rem',
            height: '43.750rem',
            '& .text-and-little-pictures': {
                position: 'absolute',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                margin: '3.125rem',
                paddingLeft: '1.750rem',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                '& .title': {
                    position: 'relative',
                    height: '11.250rem',
                    width: '420px',
                    fontFamily: 'Georgia',
                    fontSize: '40px',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    fontStyle: 'italic',
                    lineHeight: '1.5',
                    letterSpacing: 'normal',
                    color: '#be9c63',
                },
                '& .description': {
                    position: 'relative',
                    height: '5.625rem',
                    width: '378px',
                    fontFamily: 'SFUIDisplay',
                    fontSize: '14px',
                    fontWeight: 'normal',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: '1.43',
                    letterSpacing: 'normal',
                    color: '#888888',
                },
                '& .little-pictures': {
                    position: 'relative',
                    display: 'flex',
                    height: '6.250rem',
                    '& .little-picture-container': {
                        position: 'relative',
                        width: '6.250rem',
                        height: '6.250rem',
                        marginRight: '1.438rem',
                        '& .little-picture': {
                            position: 'relative',
                            width: '6.250rem',
                            height: '6.250rem',
                            objectFit: 'cover',
                        }
                    }
                }
            }
        },
        '& .primary-picture-container': {
            position: 'relative',
            flexGrow: 1,
            flexShrink: 0,
            width: '43.750rem',
            height: '43.750rem',
            '& .primary-picture-second-container': {
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '3.125rem',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                '& .primary-picture': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                },
                '& .play-icon': {
                    position: 'relative'
                }
            }
        }
    }
})(_RightPrimaryPictureStory);

export default RightPrimaryPictureStory