import axios from "axios";
import React, { useEffect, useState } from "react";

const TestBlog = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, [props]);

  const getApi = async () => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props.dataSeacrh}&api-key=AtFaURRXAyIsMbrpKZ757OGyglXJk3UX`
    );

    //console.log("check - response di Blog.jsx : ", response.data.response.docs);
    setData(response.data.response.docs);
  };

    //console.log("check - props di Blog.jsx : ", props.dataSeacrh);
    //console.log("check - data di Blog.jsx : ", data);

  return (
    <div className="container p-4 border">
      <div className="row" style={{ height: "60vh", overflowY: "scroll" }}>
        {data.map((datas, index) => (
          //console.log("check - datas di Blog.jsx : ", datas)
          <div className="card mb-2" key={index}>
            <div className="card-body">
              <h5 className="card-title">
                {datas.headline.main ? datas.headline.main : "Hallo"}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {datas.byline.original ? datas.byline.original : "Jhon Doe"}
              </h6>
              <p></p>
              <p>{datas.abstract}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestBlog;
