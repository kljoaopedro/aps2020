import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
    div__header: {
        display: 'flex',
        width: '100%',
        backgroundColor: 'black',
    },
    div__menuOp: {
        width: '100%',
        '& ul': {
            float: 'right',
            marginRight: '60px',
            display: 'flex',
            alignItems: 'center',
        },
        '& li': {
            display: 'inline-block',
            textTransform: 'none',
            color: 'white',
            margin: '16px',
            cursor: 'pointer',
            transition: 'color 0.2s ease-in-out'
        },
        '& li:hover':{
            color: 'orange',
        },
    },
})