import makeStyles from "@material-ui/core/styles/makeStyles";

export default makeStyles({
    div__root__carrinho: {
        border: '1px solid white',
        background: 'linear-gradient(#181818, black)',
        position: 'absolute',
        right: '100px',
        width: '250px',
        minHeight: '0',
        display: 'none',
        color: 'white !important',
        transition: 'color 0.2s ease-in-out',
        '& div:hover': {
            '& span': {
                color: 'orange',
            },
            '& svg': {
                color: 'orange',
            },
        },
    },
    div__carrinho__active: {
        display: 'block',
        minHeight: '100px',
        maxHeight: '400px',
        overflowY: 'auto',
        marginBottom: '30px',
    },
    span__item: {
        padding: '8px 0px 4px 4px',
        fontSize: '12px',
        width: '70%',
        cursor: 'default',
    },
    div__totalCarrinho: {
        textAlign: 'center',
        marginTop: '30px',
    },
    div__item__root: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        cursor: 'normal',
    },
    div__deleteIcon: {
        width: '30%',
        textAlign: 'end',
    },
    div__gerarPedidoBtn: {
        textAlign: 'center',
        marginTop: '18px',
        marginBottom: '18px',
        '& button': {
            border: '1px solid rgba(252, 252, 252, 0.3)',
            outline: 'none',
            background: '#C0C0C0',
            transition: 'background .5s ease-in-out',
            cursor: 'pointer !important',
        },
        '& button:hover': {
            background: 'linear-gradient(orange, transparent)',
            color: '#ffffff',
        },
    },
});