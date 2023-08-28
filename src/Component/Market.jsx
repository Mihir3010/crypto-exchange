import '../Component/CSS/Sell.css';
import axios from "axios";
import { useEffect, useState } from "react";


function Market() {
    // Setting up the initial states using
    // react hook 'useState'
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);
 
    // Fetching crypto data from the API only
    // once when the component is mounted
    useEffect(() => {
        axios.get(
            `https://api.coinstats.app/public/v1/coins?skip=0&limit=100¤cy=INR`
        ).then((res) => {
            setCrypto(res.data.coins);
        });
    }, []);
 
    return (
        <div className="App">
            <h2>All Cryptocurrencies </h2>
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <center>
              
            <table>

                <thead>
                    <tr>
                        <td>Rank</td>
                        <td>Name</td>
                        <td>Symbol</td>
                        <td>Price</td>
                        <td>Market Cap</td>
                        <td>Available Supply</td>
                        <td>Buy/sell</td>
                    </tr>
                </thead>
                {/* Mapping all the cryptos */}
                <tbody>
                    {/* Filtering to check for the searched crypto */}
                    {crypto
                        .filter((val) => {
                            return val.name.toLowerCase().includes(search.toLowerCase());
                        })
                        .map((val, id) => {
                            return (
                                <>
                                    <tr id={id}>
                                        <td className="rank">{val.rank}</td>
                                        <td className="logo">
                                            <a href={val.websiteUrl}>
                                                <img src={val.icon} alt="logo" width="30px" />
                                            </a>
 
                                            <p>{val.name}</p>
 
                                        </td>
                                        <td className="symbol">{val.symbol}</td>
                                        <td>${val.price.toFixed(2)}</td>
                                        <td>${val.marketCap}</td>
                                        <td>{val.availableSupply}</td>
                                        <td>Treade</td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
              </table>
              </center>
        </div>
    );
}
 
export default Market;
