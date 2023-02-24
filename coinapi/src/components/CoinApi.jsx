
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./coinapi.css"
import { Pagination } from "./Pagination";


export const CoinApi=()=> {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(50);
  const getdata = async () => {
    const result = await axios.get("https://api.coincap.io/v2/assets");
    setData(result.data.data);
    setLoading(false);
    console.log(result.data.data);
  };
  useEffect(() => {
    getdata();
  }, []);
  const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    
    <div className="App">
      <div className="heading">Coinapp</div>
       <div className="child-div-one">
      <table>
        <tr>
        <th>ID</th>
        <th>Rank</th>
        <th>Symbole</th>
        <th>Name</th>
        <th>Supply</th>
        <th>Max Supply</th>
        <th>MarketCapUsd</th>
        <th>VolumeUsd24Hr</th>
        <th>PriceUsd</th>
        <th>ChangePercent24Hr</th>
        <th>Vwap24Hr</th>
        <th>Explorer</th>
        </tr>
        
        {
        data.slice(indexOfFirstRecord, indexOfLastRecord).map((item)=>(
          
                <tr>
            <td>{item.id}</td>
            <td>{item.rank}</td>
            <td>{item.symbol}</td>
            <td>{item.name}</td>
            <td>{item.supply}</td>
            <td>{item.maxSupply}</td>
            <td>{item.marketCapUsd}</td>
            <td>{item.volumeUsd24Hr}</td>
            <td>{item.priceUsd}</td>
            <td>{item.changePercent24Hr}</td>
            <td>{item.vwap24Hr}</td>
            <td>{item.explorer}</td>
            </tr>
            
            
           ))}
           
         </table>
         </div>
         <div className="child-div-two">
         <Pagination 
         nPages={nPages}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         />
         </div>
    </div>
  );
}
