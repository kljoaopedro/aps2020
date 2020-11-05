import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
    div__root__carrinho: {
        border: '1px solid white',
        backgroundColor: 'darkslategrey',
        position: 'absolute',
        right: '100px',
        width: '250px',
        minHeight: '0',
        display: 'none',
        color: 'white !important',
    },
    div__carrinho__active: {
        display: 'block',
        minHeight: '100px',
        maxHeight: '400px',
        overflowY: 'auto',
        marginBottom: '30px',
    },
    span__item: {
        padding: '4px 0px 4px 4px',
        fontSize: '12px',
    },
    div__totalCarrinho: {
        textAlign: 'center',
        marginTop: '30px',
    },
});