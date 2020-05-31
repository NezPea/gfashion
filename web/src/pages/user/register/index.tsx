import React, { FunctionComponent } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Button,
  Tabs,
  Tab,
  Typography,
  TextField
} from '@material-ui/core'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import MainFrame from '../../../components/MainFrame'
import { I18N, I18N_NS } from '../_i18n'

const useStyles = makeStyles(() =>
  createStyles({
    captcha: {
      flex: '1',
      margin: '0 16px 0 0'
    },
    textField: {
      marginBottom: '10px'
    }
  })
)
const Register: FunctionComponent = () => {
  const classes = useStyles()
  const { t } = useTranslation(I18N_NS)
  return (
    <MainFrame>
      <Helmet>
        <title>{t(I18N.reg._self)}</title>
      </Helmet>
      <Box display="flex" justifyContent="center">
        <Box width="40%" display="flex" flexDirection="column">
          <h2>{t(I18N.reg._self)}</h2>
          <Tabs value={0}>
            <Tab label={t(I18N._common.phone_num)} />
            <Tab label={t(I18N._common.email)} />
          </Tabs>
          <TextField
            className={classes.textField}
            label={t(I18N._common.phone_num)}
            variant="outlined"
          />

          <h3>{t(I18N._common.ver_code._self)}</h3>
          <Box display="flex" justifyContent="space-between">
            <TextField
              className={classes.captcha}
              label={t(I18N._common.phone_num)}
              variant="outlined"
            />
            <Button variant="contained" color="primary" disableElevation>
              {t(I18N._common.ver_code.send)}
            </Button>
          </Box>
          <h3>{t(I18N._common.password._self)}</h3>
          <TextField
            className={classes.textField}
            label={t(I18N._common.password._self)}
            type="password"
            variant="outlined"
          />
          <Typography>{t(I18N._common.password.at_least_8_chars)}</Typography>
          <Button variant="contained" color="primary" disableElevation>
            {t(I18N.reg.create_acct)}
          </Button>
        </Box>
      </Box>
    </MainFrame>
  )
}
export default Register
