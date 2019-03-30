import React, { Fragment } from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    minWidth: 300,
    padding: theme.spacing(2),
    margin: theme.spacing(3)
  },
  fixedHeight: { height: 100 },
  responsive: {
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }
});

const WrappingText = withStyles(styles)(({ classes }) => (
  <Fragment>
    <Paper className={classes.paper}>
      <Typography noWrap>
        Simple text
      </Typography>
    </Paper>
    <Paper className={clsx(classes.paper, classes.fixedHeight)}>
      <Typography className={classes.responsive}>
        The book can be used for immediate consolidation or for later revision or remedial work. 
	It might be used by the whole class or by individual students needing extra help. 	
	The lefthand pages (explanations and examples) are written for the student to use individually 
	but they may of course be used by the teacher as a source of ideas and 	information 
	on which to base a lesson. The student then has the left-hand page as a record of what has 
	been taught and can refer to it in the future. The exercises can be done individually, 
	in class or as homework. Alternatively (and additionally), individual students can be 
	directed to study certain units of the book by themselves if they 	
	have particular difficulties not shared by other students in their class.

        nesciunt.
      </Typography>
    </Paper>
  </Fragment>
));

export default WrappingText;
