import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Table from '../Table'
import dataContext from '../Context/dataContext';

function index(props) {

  const[coins, setCoins] = useState([]);
  const[dark, setDark] = useState(false)

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false')
    .then(res => res.json())
    .then(data => setCoins(data))
    .catch(() => alert("Ma'lumot kelmadi"))
  }, []);

  return (
    <>
      <dataContext.Provider value={{coins, dark, setDark}}>
        <Header />
        <Table />
      </dataContext.Provider>
    </>
  );
}

export default index;