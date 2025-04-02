import React, { useState, useEffect} from 'react';
import './index.css';
import obterTodos from '../../service/produto-service';
import Produto from '../../models/Produto';

const ControleDeProduto = () => {

    //const [ produto, setProduto] = useState(new Produto());
    const [ produtos, setProdutos ] = useState([]);

    const editarProduto = (p) => {
        console.log(p);
    }

    const editarExcluir = (p) => {
        console.log(p);
    }

    const obterTodosOsProdutos = () => { 
        obterTodos().
        then(
            (res) => { 
             const produtosRetorno = res.map( p => new Produto(p))
             setProdutos(produtosRetorno)
             console.log(produtosRetorno) 
            })
        .catch((err) => {console.log(err)});
    }

    useEffect(() => {
        obterTodosOsProdutos();
    }, []);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
                <h2 className='titulo'>Controle de produtos</h2>
                <hr />
            </div>
            <div className='buttonPrincipal'>
                <button className='btn_principal'>Adicionar</button>
            </div>

            <div className='col-sm-12'>
                <table className='table table-striped table-hover'>
                    <thead >
                        <tr>
                            <td>Id</td>
                            <td>Nome</td>
                            <td>Quantidade</td>
                            <td>Valor</td>
                            <td>Data de Cadastro</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            produtos.map(p => 
                                (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.nome}</td>
                                    <td>{p.quantidadeEstoque}</td>
                                    <td>{p.valor}</td>
                                    <td>{new Date(p.dataCadastro).toLocaleDateString()}</td>
                                    <td><button className='btn btn-link' onClick={editarProduto}>Editar</button></td>
                                    <td><button className='btn btn-link' onClick={editarExcluir}>Excluir</button></td>
                                </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default ControleDeProduto
