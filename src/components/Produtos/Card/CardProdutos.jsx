import React, {useCallback, useEffect, useState} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import useStyles from './cardProdutos.styles';
import {formatMoney} from "../../../utils";
import {addItemCarrinhoAction} from "../../../store/home/home.saga";
import {useDispatch} from "react-redux";

function CardProdutos({idProduto, descricaoHover = '', descricao = '', preco = 0, img = ''}) {
    const styles = useStyles();
    const dispatch = useDispatch();

    const [precoProduto, setPrecoProduto] = useState(preco);
    const [qtdProduto, setQtdProduto] = useState(0);
    const [img64, setImg64] = useState('');

    useEffect(() => {
        if (img && img.startsWith('data')) {
            setImg64(img);
        } else {
            setImg64(`data:image/jpeg;base64,${img}`);
        }
    }, [setImg64, img]);


    // Responsavel por incrementar a quantidade do produto.
    const onClickAddMoreItem = useCallback(() => {
        setQtdProduto(qtdProduto + 1);
        if (qtdProduto >= 1) {
            const newPreco = precoProduto + preco;
            setPrecoProduto(newPreco);
        }
    }, [precoProduto, setPrecoProduto, preco, qtdProduto]);

    // Responsavel por decrementar a quantidade do produto.
    const onClickRemoveItem = useCallback(() => {
        const newPreco = precoProduto - preco;
        if (newPreco < preco) {
            setPrecoProduto(preco);
            setQtdProduto(0)
        } else {
            setPrecoProduto(newPreco);
            setQtdProduto(qtdProduto - 1)
        }
    }, [precoProduto, setPrecoProduto, preco, qtdProduto]);

    // Responsavel por colocar os itens no carrinho.
    const onAddCarrinhoHandler = useCallback(() => {
        if (qtdProduto > 0) {
            dispatch(addItemCarrinhoAction(idProduto, qtdProduto));
            setPrecoProduto(preco);
            setQtdProduto(0);
        }
    }, [dispatch, idProduto, qtdProduto, setQtdProduto, preco]);

    return (
        <Card className={styles.root}>
            <div>
                <CardMedia
                    className={styles.media}
                    title={descricaoHover}
                    image={img64}
                />
                <div className={styles.div__cardContent}>
                    <Typography variant="h5" component="h2">
                        {descricao}
                    </Typography>
                    <div className={styles.div__container__btn}>
                        <button type="button" onClick={onClickAddMoreItem}>
                            +
                        </button>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {formatMoney(precoProduto)}
                        </Typography>
                        <button type="button" onClick={onClickRemoveItem}>
                            -
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.div__qtdidade}>
                    Quantidade: {qtdProduto}
                </div>
                <div className={styles.div__button} onClick={onAddCarrinhoHandler}>
                    Adicionar ao Carrinho
                </div>
            </div>
        </Card>
    );
}

export default CardProdutos;