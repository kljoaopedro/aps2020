import React, {useCallback} from "react";
import useStyles from './login.styles';
import {useAuthDispatch, useAuthSelector} from "../../store/auth/AuthProvider";
import {logarAction} from "../../store/auth/auth.saga";
import UILoading from "../UI/Loading/UILoading";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {buildFormData} from "../../utils";
import { useHistory } from 'react-router';
import {useDispatch, useSelector} from "react-redux";


function Login() {
    const styles = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();

    const loading = useSelector(states => states.authStore.authLoading);
    const errorMessage = useSelector(states => states.authStore.errorMessage);

    const onSubmitHandler = useCallback((event) => {
        event.preventDefault();
        const data = buildFormData(event);
        dispatch(logarAction(data, history));
    }, [dispatch, history]);

    return (
        <>
            <UILoading show={loading}/>
            <form onSubmit={onSubmitHandler} className={styles.wrapper}>
                <div className={styles.div__input__container}>
                    <div className={styles.div__input__field}>
                        <TextField
                            name="username"
                            label="E-mail"
                            defaultValue=""
                            helperText="Digite seu e-mail"
                        />
                    </div>
                    <div className={styles.div__input__field}>
                        <TextField
                            name="senha"
                            label="Senha"
                            defaultValue=""
                            helperText="Digite sua senha"
                        />
                    </div>
                    <div className={styles.div__btnLogar}>
                        <Button type="submit" variant="outlined" color="primary">
                            Logar
                        </Button>
                    </div>
                    <div className={styles.div__ErrorMessage}>
                        {errorMessage}
                    </div>
                </div>
            </form>
        </>
    );
}

export default Login;