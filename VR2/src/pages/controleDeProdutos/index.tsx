import React from 'react';
import './index.css';

const ControleDeProduto = () => {
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
                <table className='table'>
                    <thead >
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>

                </table>
            </div>
        </div>
    </div>
  )
}

export default ControleDeProduto
