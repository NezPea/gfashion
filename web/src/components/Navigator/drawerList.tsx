import React from 'react'
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar
} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { Add, Remove } from '@material-ui/icons'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      [theme.breakpoints.down('xl')]: {
        width: 464
      },
      [theme.breakpoints.down('lg')]: {
        width: 350
      }
    },
    nestedSecond: {
      paddingLeft: theme.spacing(10)
    },
    nestedThird: {
      paddingLeft: theme.spacing(12)
    },
    mainListItemIcon: {
      width: 18,
      height: 18
    },
    followingItem: {
      minWidth: 35,
      marginLeft: -35,
      '& .icon': {
        width: 20,
        height: 19
      }
    },
    mainListItem: {
      '&.open': {
        backgroundColor: '#2C2C2C',
        color: theme.palette.secondary.main
      }
    }
  })
)

export default function DrawerList() {
  const [open, setOpen] = React.useState(true)
  const [gfWomenOpen, setGfWomenOpen] = React.useState(false)
  const [gfMenOpen, setGfMenOpen] = React.useState(false)
  const [gfOthersOpen, setGfOthersOpen] = React.useState(true)
  const [gfFollowingOpen, setGfFollowingOpen] = React.useState(true)

  const classes = useStyles()

  return (
    <div className={classes.list} role="presentation">
      <List>
        {['Himalaya Coin', 'G-Dollar', 'Gclub'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key={'Gfashion'}
          className={`${classes.mainListItem} ${open ? 'open' : ''}`}
          onClick={() => {
            setOpen(!open)
          }}>
          <ListItemIcon>
            <Avatar
              className={classes.mainListItemIcon}
              src={require(`../../assets/images/gfashion_icon_${
                open ? '' : 'in'
              }active.svg`)}
            />
          </ListItemIcon>
          <ListItemText primary={'Gfashion'} />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nestedSecond}
              onClick={() => {
                setGfWomenOpen(!gfWomenOpen)
              }}>
              <ListItemText primary="Women" />
              {gfWomenOpen ? <Remove /> : <Add />}
            </ListItem>
            <Collapse in={gfWomenOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="Skirts" />
                </ListItem>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="Pants" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nestedSecond}
              onClick={() => {
                setGfMenOpen(!gfMenOpen)
              }}>
              <ListItemText primary="Men" />
              {gfMenOpen ? <Remove /> : <Add />}
            </ListItem>
            <Collapse in={gfMenOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="Shoes" />
                </ListItem>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="T-shirts" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              button
              className={classes.nestedSecond}
              onClick={() => {
                setGfOthersOpen(!gfOthersOpen)
              }}>
              <ListItemText primary="Others" />
              {gfOthersOpen ? <Remove /> : <Add />}
            </ListItem>
            <Collapse in={gfOthersOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="HOME" />
                </ListItem>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="ART" />
                </ListItem>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="TECHNOLOGY" />
                </ListItem>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="CULTURE" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem
              button
              className={classes.nestedSecond}
              onClick={() => {
                setGfFollowingOpen(!gfFollowingOpen)
              }}>
              <ListItemIcon className={classes.followingItem}>
                <Avatar
                  className="icon"
                  src={require(`../../assets/images/following_icon.svg`)}
                />
              </ListItemIcon>
              <ListItemText primary="Following" />
            </ListItem>
            <Collapse in={gfFollowingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="Women" />
                </ListItem>
                <ListItem button className={classes.nestedThird}>
                  <ListItemText secondary="Women" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {['Gmail', 'GTV', 'Gnews'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
