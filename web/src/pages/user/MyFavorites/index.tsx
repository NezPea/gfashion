/**
 * Created by Peter on 2020-06-02
 */
import React, {useState} from 'react'
import MainFrame from '../../../components/MainFrame'
import { I18N, I18N_NS } from '../_i18n'
import { Helmet } from 'react-helmet-async'
import {createStyles, makeStyles, withStyles, Theme} from "@material-ui/core";
import {useTranslation} from "react-i18next";
import { Box, Tabs, Tab} from '@material-ui/core'
import { StoreDef } from './_spec'
import MyFravoritesStores from "./MyFavoritesStores";

const useStyle = makeStyles(()=>
  createStyles({
    containerBox: {
      marginLeft: '10px',
      marginTop: '50px',
      width: '100%',
    },
    formTitle: {
      fontSize: '30px',
      marginLeft: '30px',
    },
    tabsBox: {
      marginTop: '30px',
    },
  })
);

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '8px',
    '& > span': {
      maxWidth: 50,
      width: '100%',
      height: '4px',
      backgroundColor: 'black',
    },
  },
})((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

interface StyledTabProps {
  label: string;
}

const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

let testStores = [
  { displayName : "HERMES", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "Armani", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
  { displayName : "GUCCI", desc: "这是一段店铺简介，这是一段店铺简介，这是一段店铺简介，这是一段店铺简介" } as StoreDef,
];


const MyFavorites = () => {
  const classes = useStyle();
  const { t } = useTranslation(I18N_NS);

  const [selectedTab, setSelectedTab] = useState(0);
  const [stores, setStores] = useState(testStores);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if(event.target != null) {};
    if (newValue !== selectedTab)
      setSelectedTab(newValue);
  };

  const handleStoreRemove = (store: StoreDef) => {
    if (stores) {
      const index = stores.indexOf(store);

      if (index >= 0 ) {
        let newValue = [...stores];
        newValue.splice(index,  1);

        setTimeout(() => {
          setStores(newValue);
        }, 10000);
      }
    }
  };

  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.my_favorites._self)}</title>
      </Helmet>
      <Box display="flex"
        flexDirection="column"
        className={classes.containerBox}>

        <div className={classes.formTitle}>
          <span>{t(I18N.my_favorites._self)}</span>
        </div>

        <Box className={classes.tabsBox}
        >
          <StyledTabs value={selectedTab} onChange={handleTabChange}>
            <StyledTab label={t(I18N.my_favorites.stores)}/>
            <StyledTab label={t(I18N.my_favorites.wishes)}/>
            <StyledTab label={t(I18N.my_favorites.designers)}/>
          </StyledTabs>
        </Box>
        <MyFravoritesStores data={stores} onRemoveStore={handleStoreRemove}/>
      </Box>
    </MainFrame>
  );

};

export default MyFavorites



