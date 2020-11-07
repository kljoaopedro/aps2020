import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
    div__root: {
        width: '100%',
        height: '100vh',
        overflow: 'auto',
        backgroundColor: 'black',
    },
    div__header: {
        display: 'flex',
        width: '100%',
        marginBottom: '30px',
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
        '& li:hover': {
            color: 'orange',
        },
    },
    div__content: {
        width: '100%',
        height: '100%',
    },
    div__produtos: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridAutoRows: 'auto',
        gridGap: '20px',
        margin: '0px 14px 0px 14px',
    },
})