import React, { useState } from 'react'
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar
} from '@material-ui/core'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import HimalayaIconActive from 'src/assets/images/himalaya_icon_active.png'
import HimalayaIconInactive from 'src/assets/images/himalaya_icon_inactive.png'
import GdollarIconActive from 'src/assets/images/gdollar_icon_active.png'
import GdollarIconInactive from 'src/assets/images/gdollar_icon_inactive.png'
import GclubIconActive from 'src/assets/images/gclub_icon_active.png'
import GclubIconInactive from 'src/assets/images/gclub_icon_inactive.png'
import GmallIconActive from 'src/assets/images/gmall_icon_active.png'
import GmallIconInactive from 'src/assets/images/gmall_icon_inactive.png'
import GtvIconActive from 'src/assets/images/gtv_icon_active.png'
import GtvIconInactive from 'src/assets/images/gtv_icon_inactive.png'
import GnewsIconActive from 'src/assets/images/gnews_icon_active.png'
import GnewsIconInactive from 'src/assets/images/gnews_icon_inactive.png'
import { selectHomeRecommendations } from 'src/app/slices/homeRecommendationsSlice'

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
    followingsItem: {
      minWidth: 25,
      marginLeft: -25,
      '& .icon': {
        width: 18,
        height: 18
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
  const [himalayaCoinOpen, setHimalayaCoinOpen] = useState(false)
  const [gdollarOpen, setGdollarOpen] = useState(false)
  const [gclubOpen, setGclubOpen] = useState(false)
  const [gmallOpen, setGmallOpen] = useState(false)
  const [gtvOpen, setGtvOpen] = useState(false)
  const [gnewsOpen, setGnewsOpen] = useState(false)
  const [open, setOpen] = useState(true)
  const [gfWomenOpen, setGfWomenOpen] = useState(false)
  const [gfMenOpen, setGfMenOpen] = useState(false)
  const [gfOthersOpen, setGfOthersOpen] = useState(true)
  const [gfFollowingOpen, setGfFollowingOpen] = useState(true)

  const classes = useStyles()
  const home = useSelector(selectHomeRecommendations)

  const itemsBefore = [
    {
      name: 'himalaya',
      label: 'Himalaya Coin',
      iconActive: HimalayaIconActive,
      iconInactive: HimalayaIconInactive,
      isOpen: himalayaCoinOpen,
      switchOpenState: () => {
        setHimalayaCoinOpen(!himalayaCoinOpen)
      }
    },
    {
      name: 'gdollar',
      label: 'G-Dollar',
      iconActive: GdollarIconActive,
      iconInactive: GdollarIconInactive,
      isOpen: gdollarOpen,
      switchOpenState: () => {
        setGdollarOpen(!gdollarOpen)
      }
    },
    {
      name: 'gclub',
      label: 'Gclub',
      iconActive: GclubIconActive,
      iconInactive: GclubIconInactive,
      isOpen: gclubOpen,
      switchOpenState: () => {
        setGclubOpen(!gclubOpen)
      }
    }
  ]

  const itemsAfter = [
    {
      name: 'gmall',
      label: 'Gmall',
      iconActive: GmallIconActive,
      iconInactive: GmallIconInactive,
      isOpen: gmallOpen,
      switchOpenState: () => {
        setGmallOpen(!gmallOpen)
      }
    },
    {
      name: 'gtv',
      label: 'GTV',
      iconActive: GtvIconActive,
      iconInactive: GtvIconInactive,
      isOpen: gtvOpen,
      switchOpenState: () => {
        setGtvOpen(!gtvOpen)
      }
    },
    {
      name: 'gnews',
      label: 'Gnews',
      iconActive: GnewsIconActive,
      iconInactive: GnewsIconInactive,
      isOpen: gnewsOpen,
      switchOpenState: () => {
        setGnewsOpen(!gnewsOpen)
      }
    }
  ]

  return (
    <div className={classes.list} role="presentation">
      <List>
        {itemsBefore.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={item.switchOpenState}
            className={`${classes.mainListItem} ${item.isOpen ? 'open' : ''}`}>
            <ListItemIcon>
              <Avatar
                variant="rounded"
                className={classes.mainListItemIcon}
                src={item.isOpen ? item.iconActive : item.iconInactive}
              />
            </ListItemIcon>
            <ListItemText primary={item.label} />
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
              src={require(`src/assets/images/gfashion_icon_${
                open ? '' : 'in'
              }active.png`)}
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
                  src={require(`src/assets/images/following_icon.png`)}
                />
              </ListItemIcon>
              <ListItemText primary="Following" />
            </ListItem>
            <Collapse in={gfFollowingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {home.recommendations?.followingBrands.map((fb, i) => {
                  return (
                    <ListItem button className={classes.nestedThird} key={i}>
                      <ListItemIcon className={classes.followingsItem}>
                        <Avatar className="icon" src={fb.photoUrl}>
                          {fb.name[0]}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText secondary={fb.name} />
                    </ListItem>
                  )
                })}
                {home.recommendations?.followingDesigners.map((fd, i) => {
                  return (
                    <ListItem button className={classes.nestedThird} key={i}>
                      <ListItemIcon className={classes.followingsItem}>
                        <Avatar className="icon" src={fd.photoUrl}>
                          {fd.name[0]}
                        </Avatar>
                      </ListItemIcon>
                      <ListItemText secondary={fd.name} />
                    </ListItem>
                  )
                })}
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
      <Divider />
      <List>
        {itemsAfter.map((item, index) => (
          <ListItem
            button
            key={index}
            onClick={item.switchOpenState}
            className={`${classes.mainListItem} ${item.isOpen ? 'open' : ''}`}>
            <ListItemIcon>
              <Avatar
                variant="rounded"
                className={classes.mainListItemIcon}
                src={item.isOpen ? item.iconActive : item.iconInactive}
              />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
