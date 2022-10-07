import React, { useState, useEffect } from "react";
import './Style.css';
import Loader from "../Const/Loader";
import axios from "axios";
import Gap from "../Const/Gap";
import SideBar from "../Const/Sidebar";
const URL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=1ae1d6ad9c62470ebe0b9d1e75d6d0aa";
const News = () => {
  const [data, setdata] = useState([]);
  const [loader, setLoader] = useState(false);
  const getUser = async () => {
    setLoader(true);
    try {
      const response = await axios.get(`${URL}`);
      setdata(response.data.articles);
    } catch (error) {
      console.error(error);
    }
    setLoader(false);
  };
  useEffect(() => {
    getUser();
  }, []);

  console.log(data, "datadata");

  const Opendata =()=>{

  }


  return (
    <>
    <SideBar />
      <Gap gap={70} />
      <h1 className="fontFamily"> Ye Toh Latest News..Hai</h1> 
      <Gap gap={30} />
      {loader ? <h1><Loader /></h1> : null}
      {data.length==0?<p>NO Data</p>:null}
      <div className="container-fluid main">
        <div className="row justify-content-center ">
          {data.map((i, k) => {
            return (
              <div key={k}>
              <p class="card-title author fontFamily">{i.author == null ? <p>Latest news</p>:<p>{i.author}</p> }</p>
                <div class="card" style={{ width: "50rem",margin: '11px' }}>
                <a href={i.url} target="_blank" rel="noreferrer">
                 {i.urlToImage == null ? <h1>NO Image</h1>:<img class="card-img-top" src={i.urlToImage} alt="Card image cap"/> }
                  </a>
                  <div class="card-body">
                   <a href={i.url}>
                    <h5 class="card-text fontFamily">
                     {i.content}
                    </h5>
                    </a>
                    <p class="card-text fontFamily">
                     {i.description}
                    </p>
                    <p class="card-text fontFamily">
                     {i.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default News;
