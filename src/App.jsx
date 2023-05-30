import React, { useState } from "react";
import TestBlog from "./Blog/TestBlog";

function App() {
  const initialValues = {
    search: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //console.log("cheack - values di App.js : ", values.search);

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
                <button className="btn btn-outline-secondary disabled">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </div>

            {/* article */}
            <TestBlog dataSeacrh={values.search} />
          </div>
        </div>
        <div className="col-md-4 "></div>
      </div>
    </div>
  );
}

export default App;
