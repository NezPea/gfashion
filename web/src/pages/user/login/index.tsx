import React, { FunctionComponent } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Box,
  Card,
  Divider,
  Button,
  Link,
  CardHeader,
  CardContent,
  TextField
} from '@material-ui/core'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import MainFrame from '../../../components/MainFrame'
import { I18N, I18N_NS } from '../_i18n'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '400px'
    },
    cardContent: {
      display: 'flex',
      flexFlow: 'column'
    },
    title: {
      color: '#fff',
      backgroundColor: theme.palette.text.secondary
    },
    form: {
      display: 'flex',
      flexFlow: 'column'
    },
    textField: {
      marginBottom: '10px'
    },
    login: {}
  })
)
const Login: FunctionComponent = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation(I18N_NS)
  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.login._seo.title)}</title>
      </Helmet>
      <Box display="flex" flexDirection="row-reverse">
        <Card className={classes.card}>
          <CardHeader title="Gfashion" className={classes.title} />
          <CardContent className={classes.cardContent}>
            <h3>{t(I18N.login._self)}</h3>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                className={classes.textField}
                label={t(I18N.login.email_or_phone_num)}
                type="search"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                label={t(I18N._common.password._self)}
                type="password"
                variant="outlined"
              />
            </form>
            <Link href={`/${i18n.language}/find-password`}>
              {t(I18N.find_pwd._self)}?
            </Link>
            <Divider variant="inset" />
            <Button variant="contained" color="primary" disableElevation>
              {t(I18N.login._self)}
            </Button>
          </CardContent>
        </Card>
      </Box>
    </MainFrame>
  )
}
export default Login
