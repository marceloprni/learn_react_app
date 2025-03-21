import React, { useState, useEffect} from 'react';
import './index.css';
import obterTodos from '../../service/produto-service';
import Produto from '../../models/Produto';

const ControleDeProduto = () => {

    const [ produto, setProduto] = useState(new Produto());
    let produtos = []

    useEffect(() => {
        obterTodos().
        then(
            (res) => { 
             produtos = res.map( p => new Produto(p))
            })
        .catch((err) => {console.log(err)});
    }, []);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-12'>
                <h1>Controle de produtos</h1>
                <hr />
            </div>
            <div className='col-sm-12'>
                <button className='btn btn-primary'>Adicionar</button>
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
