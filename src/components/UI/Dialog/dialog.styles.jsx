import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  dialog__root: {
    '& .MuiDialog-paperWidthSm': {
      width: '50rem',
      maxWidth: '62.5rem',
    },
    '& .MuiDialogContent-root:first-child': {
      padding: '2.1875rem 5.75rem 2.1875rem 5.75rem',
    },
  },
  dialog__textContainer: {
    textAlign: 'center',
    color: '#14213d',
    '& h2': {
      fontSize: '1.875rem',
      fontWeight: 'bold',
    },
    '& p': {
      fontSize: '1.375rem',
    },
    '@media screen and (max-width: 600px)': {
      '& h2': {
        fontSize: '1rem',
      },
      '& p': {
        fontSize: '0.875rem',
      },
      padding: '0 2.1875rem',
    },
  },
  dialog__icon: {
    display: 'inline-flex',
    width: '100%',
    maxHeight: '6.25rem',
    justifyContent: 'center',
    paddingTop: '2.1875rem',
  },
  dialog__icon__sucess: {
    '& .MuiSvgIcon-root': {
      fontSize: '5.5rem',
      color: 'green',
      '@media screen and (max-width: 600px)': {
        fontSize: '3rem',
      },
    },
  },
  dialog__icon__error: {
    '& .MuiSvgIcon-root': {
      fontSize: '5.5rem',
      color: '#fca311',
      '@media screen and (max-width: 600px)': {
        fontSize: '3rem',
      },
    },
  },
  dialog__actions: {
    justifyContent: 'center',
    padding: '2.1875rem 0',
  },
});
