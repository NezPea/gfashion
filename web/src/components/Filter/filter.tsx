import React from 'react'
import QueryString from 'query-string'
import { useSelector } from 'react-redux'
import { selectProductList } from '../../app/slices/productListSlice'
import { FilterDetail, FilterOptionDetail } from '../../app/types'
import {
  createStyles,
  withStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { useTranslation } from 'react-i18next'
import { I18N, I18N_NS } from '../../pages/GFashion/product/_i18n'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(2)
    },
    noMargin: {
      margin: '0 !important'
    },
    title: {
      fontSize: '18px',
      margin: '30px 0 10px'
    },
    filterDesc: {
      fontSize: '20px',
      marginBottom: theme.spacing(4)
    },
    filterContainer: {
      width: '100%'
    },
    filter: {
      backgroundColor: theme.palette.background.default,
      boxShadow: 'none',
      '&::before': {
        backgroundColor: theme.palette.background.default
      }
    },
    filterSummary: {
      fontSize: '16px',
      '& .add': {
        display: 'block'
      },
      '& .remove': {
        display: 'none'
      }
    },
    filterSummaryExpanded: {
      '& .add': {
        display: 'none'
      },
      '& .remove': {
        display: 'block'
      }
    },
    filterDetails: {
      display: 'flex',
      flexDirection: 'column'
    },
    options: {
      display: 'flex',
      flexDirection: 'column'
    },
    optionsText: {
      color: theme.palette.text.secondary,
      fontSize: '11px'
    },
    appliedOption: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
)

const summaryStyles = {
  root: {
    minHeight: '40px',
    padding: '0',
    '&$expanded': {
      minHeight: '40px'
    }
  },
  content: {
    margin: '4px 0',
    '&$expanded': {
      margin: '4px 0'
    }
  },
  expandIcon: {
    padding: 3
  },
  expanded: {}
}

const CompactExpansionPanelSummary = withStyles(summaryStyles)(
  ExpansionPanelSummary
)

const Filter = ({
  onFilterAdd,
  onFilterRemove
}: {
  onFilterAdd: (filters: QueryString.ParsedQuery<string>) => void
  onFilterRemove: (code: string) => void
}) => {
  const classes = useStyles()
  const { t } = useTranslation(I18N_NS)
  let productList = useSelector(selectProductList)

  const addFilter = (code: string, value: string) => {
    let filterObj: QueryString.ParsedQuery<string> = {}
    filterObj[code] = value
    onFilterAdd(filterObj)
  }

  const removeFilter = (code: string) => {
    onFilterRemove(code)
  }

  return (
    <div className={classes.root}>
      <div className={classes.filterDesc}>{t(I18N.product.filter.title)}</div>
      <div className={classes.filterContainer}>
        {productList.detail &&
          productList.detail.avavilable_filters &&
          productList.detail.avavilable_filters.length &&
          productList.detail.avavilable_filters.map(
            (filter: FilterDetail, index: number) => (
              <ExpansionPanel
                key={index}
                classes={{
                  root: classes.filter,
                  expanded: classes.noMargin
                }}>
                <CompactExpansionPanelSummary
                  expandIcon={
                    <div>
                      <AddIcon className="add" />
                      <RemoveIcon className="remove" />
                    </div>
                  }
                  classes={{
                    root: classes.filterSummary,
                    expanded: classes.filterSummaryExpanded
                  }}>
                  <div>{filter.name}</div>
                </CompactExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <div className={classes.filterDetails}>
                    <div>
                      {filter.options
                        .filter((option: FilterOptionDetail) => {
                          return option.isChecked === 'true'
                        })
                        .map((option: FilterOptionDetail, index: number) => (
                          <Chip
                            key={index}
                            label={option.name}
                            onDelete={() => removeFilter(filter.code)}
                            color="secondary"
                            variant="outlined"
                            classes={{
                              root: classes.appliedOption
                            }}
                          />
                        ))}
                    </div>
                    <div className={classes.options}>
                      {filter.options
                        .filter((option: FilterOptionDetail) => {
                          return option.isChecked !== 'true'
                        })
                        .map((option: FilterOptionDetail, index: number) => (
                          <FormControlLabel
                            key={index}
                            control={
                              <Checkbox
                                name={option.id}
                                onChange={() =>
                                  addFilter(filter.code, option.id)
                                }
                              />
                            }
                            label={option.name}
                            classes={{
                              label: classes.optionsText
                            }}
                          />
                        ))}
                    </div>
                  </div>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            )
          )}
      </div>
    </div>
  )
}

export default Filter
