import React, { useEffect, useState } from "react";
import axios from "axios";
import TestBlog from "./TestBlog";

const Search = () => {
  const [data, setData] = useState([]);
  const initialValues = {
    search: "",
  };

  const [values, setValues] = useState(initialValues);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const SearchData = (e) => {
    e.preventDefault();
    setQuery(values.search);
  };

  useEffect(() => {
    getApi();
  }, [query]);

  const getApi = async () => {
    const response = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=AtFaURRXAyIsMbrpKZ757OGyglXJk3UX`
    );

    //console.log("check - response di Blog.jsx : ", response.data.response.docs);
    setData(response.data.response.docs);
  };

    console.log("cheack - query di Search.js : ", query);
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-4 "></div>
        <div className="col-md-4 d-flex align-items-center justify-content-center ">
          <div className="row " style={{ width: "18rem" }}>
            {/* Search */}
            <div className="input-group p-2 border">
              <input
                type="text"
                className="form-control"
                placeholder="search"
                name="search"
                onChange={handleInputChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  onClick={SearchData}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>

            {/* article */}
            <TestBlog data={data} />
          </div>
        </div>
        <div className="col-md-4 "></div>
      </div>
    </div>
  );
};

export default Search;
