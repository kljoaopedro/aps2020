import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
    root: {
        maxWidth: 345,
        borderRadius: 0,
        opacity: 1,
        transition: 'opacity 0.2s ease-in-out',
        '&:hover': {
            opacity: 0.8,
            color: 'orange',
        },
    },
    media: {
        height: 200,
    },
    div__button: {
        backgroundColor: 'black',
        textTransform: 'normal',
        color: 'white',
        transition: 'color 0.2s ease-in-out',
        cursor: 'pointer',
        textAlign: 'center',
        '&:hover': {
            color: 'orange',
        },
    },
    div__cardContent: {
        color: 'white',
        backgroundColor: 'black',
        paddingBottom: '20px',
        '& h2': {
            paddingTop: '4px',
            color: 'white',
            textAlign: 'center',
        },
        '& p': {
            color: 'white',
            textAlign: 'right',
        },
    },
    div__container__btn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        '& p':{
            width: '50%',
            textAlign: 'center',
        }
    },
    div__qtdidade: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: '8px',
    },
});