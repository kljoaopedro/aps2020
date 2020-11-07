import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

export const Accordion = withStyles({
  root: {
    border: '1px solid white',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'black',
    color: 'white',
    borderBottom: '1px solid white',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      background: 'linear-gradient(#181818, black)',
      color: 'orange',
      '& svg': {
        color: 'white',
        transform: 'rotate(180deg)',
      },
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      width: '100%',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const AccordionDetails = withStyles(theme => ({
  root: {
    display: 'block',
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
