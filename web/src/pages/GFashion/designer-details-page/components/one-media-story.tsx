import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import story3primary from 'src/assets/images/story-3-primary.png'
import playIcon from 'src/assets/images/play.png'

class _OneMediaStory extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['story-container']}>
                <div className='primary-picture-container'>
                    <div className='primary-picture-second-container'>
                        <img className='primary-picture' src={story3primary} alt='one'></img>
                        <img className='play-icon' src={playIcon} alt='playIcon'></img>
                    </div>
                </div>
            </div>
        )
    }
}

const OneMediaStory = withStyles({
    'story-container': {
        position: 'relative',
        display: 'flex',
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
            },
        },
    }
})(_OneMediaStory);

export default OneMediaStory