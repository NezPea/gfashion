import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import story2primary from 'src/assets/images/story-2-primary.png'
import story2little1 from 'src/assets/images/story-2-little.png'
import story2little2 from 'src/assets/images/story-2-little-2.png'

class _LeftRectanglePrimaryPictureStory extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['story-container']}>
                <div className='primary-picture-container'>
                    <div className='primary-picture-second-container'>
                        <img className='primary-picture' src={story2primary} alt='one'></img>
                    </div>
                </div>
                <div className='text-and-little-pictures-container'>
                    <div className='text-and-little-pictures'>
                        <div className='title'>
                            {
                                'Daily Fashion'
                            }
                        </div>
                        <div className='description'></div>
                        <div className='little-pictures'>
                            <div className='little-picture-container'>
                                <img className='little-picture' src={story2little1} alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src={story2little2} alt='one'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const LeftRectanglePrimaryPictureStory = withStyles({

    'story-container': {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',

        '& .primary-picture-container': {
            position: 'relative',
            flexGrow: 1,
            flexShrink: 0,
            width: '43.750rem',
            height: '43.750rem',

            '& .primary-picture-second-container': {
                position: 'absolute',
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
            },
        },

        '& .text-and-little-pictures-container': {
            position: 'relative',
            flexGrow: '1',
            flexShrink: '0',
            width: '28.812rem',
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
                    width: '308px',
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
                    },

                    '& .little-picture': {
                        position: 'relative',
                        width: '6.250rem',
                        height: '6.250rem',
                        objectFit: 'cover',
                    }
                }
            }
        }
    }
})(_LeftRectanglePrimaryPictureStory)

export default LeftRectanglePrimaryPictureStory