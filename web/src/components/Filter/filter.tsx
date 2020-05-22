import React from 'react';
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

const availableFilters = [{
  name: "材质",
  code: "material",
  options: [{
    name: '山羊绒',
    value: 'cashmere',
    isSelected: true,
  }, {
    name: '羊毛',
    value: 'wool',
    isSelected: false,
  }, {
    name: '棉',
    value: 'cotton',
    isSelected: false,
  }]
}, {
  name: "尺寸",
  code: "material",
  options: [{
    name: '大号',
    value: "size-l",
    isSelected: false,
  }, {
    name: '中号',
    value: "size-m",
    isSelected: true,
  }, {
    name: '小号',
    value: "size-s",
    isSelected: false,
  }]
}, {
  name: "颜色",
  code: "material",
  options: [{
    name: "红色",
    value: 'red',
    isSelected: false,
  }, {
    name: "绿色",
    value: 'green',
    isSelected: false,
  }, {
    name: "橙色",
    value: 'orange',
    isSelected: true,
  }, {
    name: "蓝色",
    value: 'blue',
    isSelected: true,
  }]
}];

const removeFilter = () => {
  console.info('You clicked the delete icon.');
};

const Filter = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        按以下条件筛选
      </div>
      <div className={classes.filterContainer}>
        {
          availableFilters && availableFilters.length &&
          availableFilters.map((filter, index) => (
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
                      filter.options.filter((option) => {
                        return option.isSelected
                      }).map((option, index) => (
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
                      filter.options.filter((option) => {
                        return !option.isSelected
                      }).map((option, index) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              name={option.value}
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
