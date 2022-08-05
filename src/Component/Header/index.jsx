import React, {useContext} from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/favicon.png'
import dataContext from '../Context/dataContext';
import './main.css'

function index(props) {

  const { dark } = useContext(dataContext)
  const { setDark } = useContext(dataContext)

  return (
    <header className={`py-4 ${dark ? 'bg-dark text-white' : 'bg-white'}`}>
      <Container className='text-center'>
        <div className='d-flex flex-wrap align-items-center justify-content-center'>
        <img src={logo} alt="logo" height='60' width='60' />
        <h1 className='m-0 ms-3'>
        CoinGecko
        </h1>

        <button onClick={(e) => setDark((e) => !e)}
        className={`dark-btn ${dark ? 'btn btn-light' : 'btn btn-dark'}`}>
        {(dark) ? 'Light' : 'Dark'}
        </button>
        </div>
      </Container>
    </header>
  );
}

export default index;