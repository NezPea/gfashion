import React from 'react'
import { withStyles } from '@material-ui/core/styles'

class _OneMediaStory extends React.Component<any> {

    render() {

        const { classes } = this.props

        return (
            <div className={classes['story-container']}>
                <div className='primary-picture-container'>
                    <div className='primary-picture-second-container'>
                        <img className='primary-picture' src='http://localhost:3004/grey-wide.png' alt='one'></img>
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
                },
            },
        },
    }
})(_OneMediaStory);

export default OneMediaStory