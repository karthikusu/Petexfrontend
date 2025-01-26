import React from "react";
import { Link } from "react-router-dom";

function Lost() {
  return (
    <>
      {/* <Sidebar/> */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {/* First Card */}
        <div
          className="responsive-card"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          <div style={{ width: "100%" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg"
              alt="Dog"
              style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ textAlign: "center", color: "blue" }}>Dog</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                If Your Dog is Missing
              </p>
              <Link to="/reportlostform">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Report Here
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="responsive-card"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          <div style={{ width: "100%" }}>
            <img
              src="https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg"
              alt="Cat"
              style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ textAlign: "center", color: "blue" }}>Cat</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                If Your Cat is Missing
              </p>
              <Link to="/reportlostform">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Report Here
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Third Card */}
        <div
          className="responsive-card"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          {/* Add your third card content here */}
          <div style={{ width: "100%" }}>
            <img
              src="https://cdn.pixabay.com/photo/2011/01/01/17/15/camel-4319_1280.jpg"
              alt="Camel"
              style={{ width: "100%", height: "150px", borderRadius: "5px 5px 0 0" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ textAlign: "center", color: "blue" }}>Camel</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                If Your Camel is Missing
              </p>
              <Link to="/reportlostform">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Report Here
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        <div
          className="responsive-card"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          {/* Add your fourth card content here */}
          <div style={{ width: "100%" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/02/13/20/21/horse-2063672_1280.jpg"
              alt="Cat"
              style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ textAlign: "center", color: "blue" }}>Horse</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                If Your Horse is Missing
              </p>
              <Link to="/reportlostform">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Report Here
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Fifth Card */}
        <div
          className="responsive-card"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          {/* Add your fifth card content here */}
          <div style={{ width: "100%" }}>
            <img
              src="https://cdn.pixabay.com/photo/2017/04/09/16/46/lamb-2216160_1280.jpg"
              alt="Sheep"
              style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ textAlign: "center", color: "blue" }}>Sheep</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                If Your Sheep is Missing
              </p>
              <Link to="/reportlostform">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Report Here
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Sixth Card */}
        <div
          className="responsive-card"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          {/* Add your sixth card content here */}
          <div style={{ width: "100%" }}>
            <img
              src="https://cdn.pixabay.com/photo/2023/09/10/00/49/lovebird-8244066_1280.jpg"
              alt="Bird"
              style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
            />
            <div style={{ padding: "1rem" }}>
              <h3 style={{ textAlign: "center", color: "blue" }}>Bird</h3>
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                If Your Bird is Missing
              </p>
              <Link to="/reportlostform">
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ display: "block", margin: "0 auto" }}
                >
                  Report Here
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lost;
