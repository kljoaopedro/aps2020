import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
    wrapper: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    div__input__container: {
        display: 'flex',
        flexDirection: 'column',
    },
    div__input__field: {
        marginTop: '24px',
    },
    div__btnLogar: {
        textAlign: 'center',
        marginTop: '12px',
    },
    div__ErrorMessage: {
        textAlign: 'center',
        marginTop: '40px',
        color: 'red',
    },
});