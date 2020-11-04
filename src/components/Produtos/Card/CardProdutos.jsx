import React, {useCallback, useState} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import useStyles from './cardProdutos.styles';
import {formatMoney} from "../../../utils";

function CardProdutos({idProduto, descricaoHover = '', descricao = '', preco = '', img = ''}) {
    const styles = useStyles();

    const [precoProduto, setPrecoProduto] = useState(preco);

    const onClickAddMoreItem = useCallback(() => {
        const newPreco = precoProduto + preco;
        setPrecoProduto(newPreco);
    }, [precoProduto, setPrecoProduto, preco]);

    const onClickRemoveItem = useCallback(() => {
        const newPreco = precoProduto - preco;
        if(newPreco < preco){
         setPrecoProduto(preco);
        } else{
            setPrecoProduto(newPreco);
        }
    }, [precoProduto, setPrecoProduto, preco]);

    return (
        <Card className={styles.root}>
            <div>
                <CardMedia
                    className={styles.media}
                    title={descricaoHover}
                    image={img}
                />
                <div className={styles.div__cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
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
                <div className={styles.div__button}>
                    Adicionar ao Carrinho
                </div>
            </div>
        </Card>
    );
}

export default CardProdutos;