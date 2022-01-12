import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaProdutoHome.css';
import { useHistory } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';


function ListaProdutoHome() {
    const [produtos, setProdutos] = useState<Produto[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );





    async function getProduto() {
        await busca("/produtos", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProduto()

    }, [produtos.length])

    return (

        <Box display="flex" justifyContent="center" flexWrap="wrap" className="back-produtos">

            {
                produtos.map(post => (
                    <Box m={2} width="22%" display="flex">
                        <Card variant="outlined">
                            <img src={post.foto} alt="" className="imgs" />
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.tamanho}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.cor}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.preco}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {post.categoria?.descricao}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/form-produtos/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1} >
                                            <Button variant="contained" className="marginLeft botao-1" size='small'>
                                                comprar
                                            </Button>
                                        </Box>
                                    </Link>
                                    
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }

        </Box>
    )
}

export default ListaProdutoHome;