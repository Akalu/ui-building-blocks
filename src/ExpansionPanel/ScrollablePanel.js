import React, { Fragment } from 'react';

import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  panelDetails: {
    flexDirection: 'column',
    height: 150,
    overflow: 'auto'
  }
});

const IpsumContent = () => (
  <Fragment>
    <Typography paragraph>
    	4.1 Are the underlined verbs right or wrong? Correct the ones that are wrong.

  	1. I'm seeing the manager tomorrow morning.  RIGHT
  	2. I'm feeling hungry. Is there anything to eat?  ---
  	3. Are you believing in God?  ---
  	4. This sauce is great. It's tasting really good.  ---
  	5. I'm thinking this is your key. Am I right?  ---
    </Typography>

    <Typography paragraph>
  	4.3 Put the verb into the correct form, present continuous or present simple.

  	1. Are you hungry? Do you want  something to eat? (you/want)
  	2. Jill is interested in politics but she --- to a political party. (not/belong)
  	3. Don't put the dictionary away. I --- it. (use)
  	4. Don't put the dictionary away. I --- it. (need)
  	5. Who is that man? What ---? (he/want)
  	6. Who is that man? Why --- at us? (he/look)
  	7. George says he's 80 years old but nobody --- him. (believe)
  	8. She told me her name but I --- it now. (not/remember)
  	9. I --- of selling my car. (think) Would you be interested in buying it?
  	10. I --- you should sell your car. (think) You --- it very often. (not/use)
  	11. I used to drink a lot of coffee but these days I --- tea. (prefer)
  	12. Air --- mainly of nitrogen and oxygen. (consist)
    </Typography>

    <Typography paragraph>
 	11.3 Complete Bs answers to A's questions.

  	1. A: Amy is in hospital, isn't she?
  	B: Yes, she has been in hospital since Monday.
  	2. A: Do you see Ann very often?
  	B: No, I haven't seen her for three months.
  	3. A: Is Margaret married?
  	B. Yes, she --- married for ten years.
  	4. A: Are you waiting for me?
  	B: Yes, I --- for the last half hour.
  	5. A: You know Linda, don't you?
  	B: Yes, we --- each other for ages.
  	6. A: Do you still play tennis?
  	B: No, I --- tennis for years.
  	7. A: Is Jim watching TV? 
  	B: Yes, he --- TV all evening.
  	8. A: Do you watch TV a lot?
  	B: No, I --- TV for a long time.
  	9. Have you got a headache?
  	B: Yes, I --- a headache all morning.
  	10. A: George is never ill, is he?
  	B: No, he --- ill since I've known him.
  	11. A: Are you feeling ill?
  	B: Yes, I --- ill since I got up.
  	12. Sue lives in London, doesn't she?
  	B: Yes, she --- in London for the last few years.
  	13. Do you still go to the cinema a lot?
  	B: No, I --- to the cinema for ages.
  	14. Would you like to go to New York one day?
  	B: Yes, I --- to go to New York. (use always/want)
    </Typography>
  </Fragment>
);

const ScrollablePanel = withStyles(styles)(({ classes }) => (
  <Fragment>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>First</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <IpsumContent />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Second</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <IpsumContent />
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Third</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.panelDetails}>
        <IpsumContent />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Fragment>
));

export default ScrollablePanel;
