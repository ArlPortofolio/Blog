import React from "react";

const TestBlog = (props) => {
  //console.log("check - props di Blog.jsx : ", props.data);
  //console.log("check - data di Blog.jsx : ", data);

  return (
    <div className="container p-4 border">
      <div className="row" style={{ height: "60vh", overflowY: "scroll" }}>
        {props.data.map((datas, index) => (
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
