import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles({
  dialog__root: {
    '& .MuiDialog-paperWidthSm': {
      width: '50rem',
      maxWidth: '62.5rem',
      background: 'linear-gradient(#181818, black)',
      border: '1px solid white',
    },
    '& .MuiDialogContent-root:first-child': {
      padding: '2.1875rem 5.75rem 2.1875rem 5.75rem',
    },
  },
  dialog__icon: {
    display: 'inline-flex',
    width: '100%',
    maxHeight: '6.25rem',
    justifyContent: 'center',
    paddingTop: '2.1875rem',
    paddingBottom: '2.1875rem',
    '& .MuiSvgIcon-root': {
      fontSize: '5.5rem',
      color: 'green',
      '@media screen and (max-width: 600px)': {
        fontSize: '3rem',
      },
    },
  },
});
