import React, { useState, useEffect} from 'react';
import './index.css';
import obterTodos from '../../service/produto-service';
import Produto from '../../models/Produto';
import { aplicarMascaraDataHora } from '../../utils/data';
import { mascaraDinheiroReal } from '../../utils/mascara-dinheiro';

const ControleDeProduto = () => {

    const [ produto, setProduto] = useState(new Produto());
    const [ produtos, setProdutos ] = useState([]);

    const editarProduto = (p) => {
        console.log(p);
    }

    const editarExcluir = (p) => {
        console.log(p);
    }

    const atualizarProduto = (propriedade, valor) => {
        produto[propriedade] = valor;
        setProduto(produto)
    }

    const salvarProduto = () => {
        console.log(produto)
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
                <button className='btn_principal' data-toggle="modal" data-target="#exampleModal">Adicionar</button>
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
                                    <td>{mascaraDinheiroReal(p.valor)}</td>
                                    <td>{aplicarMascaraDataHora(p.dataCadastro)}</td>
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
        

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">

                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Adicionar Produto</h5>
                  
                </div>

                <div class="modal-body">
                  <div className='row'>
                        <div className="col-sm-12">
                            <div class="form-group">
                                <label htmlFor="nome" class='d-flex justify-content-start'>Name:</label>
                                <input type="text" 
                                class="form-control" 
                                id='nome' value={produto.nome}  
                                onChange={(e) => atualizarProduto("nome", e.target.value)} 
                                />

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="form-group justify-content-start">
                                <label htmlFor="quantidade" class='d-flex justify-content-start'>Quantidade:</label>
                                <input type="number" 
                                class="form-control" 
                                d='quantidade' 
                                value={produto.quantidadeEstoque} 
                                 onChange={(e) => atualizarProduto("quantidadeEstoque", e.target.value)}
                                 />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="form-group">
                                <label htmlFor="valor" class='d-flex justify-content-start'>Valor:</label>
                                <input type="number" 
                                class="form-control" 
                                id='valor' 
                                value={produto.valor} 
                                 onChange={(e) => atualizarProduto("valor", e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="form-group">
                                <label htmlFor="cadaCadastro" class='d-flex justify-content-start'>Data Cadastro:</label>
                                <input 
                                type="date" 
                                class="form-control"
                                id='cadaCadastro'
                                value={produto.dataCadastro} 
                                onChange={(e) => atualizarProduto("dataCadastro", e.target.value)}
                                />
                            </div>
                        </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Sair</button>
                  <button type="button" class="btn btn-primary" onClick={salvarProduto}>Save changes</button>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default ControleDeProduto
