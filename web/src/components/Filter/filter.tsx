import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductList } from '../../app/slices/productListSlice';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '18px',
      margin: '30px 0 10px'
    },
    filterContainer: {
      width: '100%'
    },
    filter: {
      display: 'flex',
      flexDirection: 'column',
    },
    options: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(1)
    },
    appliedOption: {
      marginRight: theme.spacing(1)
    }
  }),
);

const removeFilter = () => {
  console.info('You clicked the delete icon.');
};

const Filter = () => {
  const classes = useStyles();
  let productList = useSelector(selectProductList);

  return (
    <div className={classes.root}>
      <div>
        按以下条件筛选
      </div>
      <div className={classes.filterContainer}>
        {
          productList.detail && productList.detail.avavilable_filters && productList.detail.avavilable_filters.length &&
          productList.detail.avavilable_filters.map((filter: any, index: any) => (
            <ExpansionPanel key={index}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div>{filter.name}</div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={classes.filter}>
                  <div>
                    {
                      filter.options.filter((option: any) => {
                        return option.isChecked
                      }).map((option: any, index: any) => (
                        <Chip
                          key={index}
                          label={option.name}
                          onDelete={removeFilter}
                          color="primary"
                          variant="outlined"
                          classes={{
                            root: classes.appliedOption
                          }}
                        />
                      ))
                    }
                  </div>
                  <div className={classes.options}>
                    {
                      filter.options.filter((option: any) => {
                        return !option.isChecked
                      }).map((option: any, index: any) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              name={option.id}
                              color="primary"
                            />
                          }
                          label={option.name}
                        />
                      ))
                    }
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))
        }
      </div>
    </div>
  )
}

export default Filter;
