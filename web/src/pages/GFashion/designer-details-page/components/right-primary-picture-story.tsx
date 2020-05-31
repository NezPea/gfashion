import React from 'react'
import { withStyles } from '@material-ui/core/styles'

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
                                <img className='little-picture' src='http://localhost:3004/grey-wide.png' alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src='http://localhost:3004/grey-wide.png' alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src='http://localhost:3004/grey-wide.png' alt='one'></img>
                            </div>
                            <div className='little-picture-container'>
                                <img className='little-picture' src='http://localhost:3004/grey-wide.png' alt='one'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='primary-picture-container'>
                    <div className='primary-picture-second-container'>
                        <img className='primary-picture' src='http://localhost:3004/grey-wide.png' alt='one'></img>
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
            backgroundColor: '#757575',
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
                backgroundColor: '#707070',
                '& .title': {
                    position: 'relative',
                    height: '11.250rem',
                    backgroundColor: '#404040',
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
                    backgroundColor: '#404040',
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
                    backgroundColor: '#505050',
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
            backgroundColor: '#808080',
            '& .primary-picture-second-container': {
                position: 'absolute',
                margin: '3.125rem',
                left: '0',
                top: '0',
                right: '0',
                bottom: '0',
                backgroundColor: '#454545',
                '& .primary-picture': {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }
            }
        }
    }
})(_RightPrimaryPictureStory);

export default RightPrimaryPictureStory