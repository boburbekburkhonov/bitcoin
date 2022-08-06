import React, { useState, useEffect } from 'react';
import Header from '../Header'
import Table from '../Table'
import dataContext from '../Context/dataContext';
import Pagination from '../Pagination'

function index(props) {

  const[pages, setPages] = useState(1)
  const[coins, setCoins] = useState([]);
  const[dark, setDark] = useState(false)

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=${pages}&sparkline=false`)
    .then(res => res.json())
    .then(data => setCoins(data))
    .catch(() => alert("Ma'lumot kelmadi"))
  }, [pages]);

  return (
    <>
      <dataContext.Provider value={{coins, dark, setDark, pages, setPages}}>
        <Header />
        <Table />
        <Pagination />
      </dataContext.Provider>
    </>
  );
}

export default index;