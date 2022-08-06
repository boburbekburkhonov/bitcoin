import React, { useState, useEffect, useContext } from 'react';
import { Table,Container, Col, Row } from 'reactstrap'
import '../../index.css'
import dataContext from '../Context/dataContext';

function index(props) {

  const {coins} = useContext(dataContext)
  const {dark} = useContext(dataContext)

  return (
    <div className={`${dark ? 'bg-dark' : 'bg-white'}`}>
      <Container>
        <Row>
          <Col className='mt-4' md='12'>
          <Table className={`table-hover ${dark ? 'table-dark' : 'table'}`}>
      <thead>
        <tr>
          <th>
           #
          </th>
          <th>
           Cryto Name
          </th>
          <th>
            Current Price
          </th>
          <th>
            Market cap change
          </th>
          <th>
            Market cap rank
          </th>
        </tr>
      </thead>
        {coins.map((item, index) => {
          return (
            <tbody key={item.id}>
            <tr>
                <td>
                {index + 1}
                </td>
                <td>
                  <img className='me-3' src={item.image} alt="logo" width={32} height='32' />
                  {item.name}
                </td>
                <td>
                {item.current_price}
                </td>
               {item.market_cap_change_percentage_24h < 0 ?
               <td className='text-danger'>
                {item.market_cap_change_percentage_24h?.toFixed(2)}%
               </td>
              :
              <td className='text-success'>
                {item.market_cap_change_percentage_24h?.toFixed(2)}%
              </td>
              }
                <td>
                 {item.market_cap_rank}
                </td>
            </tr>
          </tbody>
          )
        })}
  </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default index;