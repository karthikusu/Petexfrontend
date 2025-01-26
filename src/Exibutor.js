// import React from "react";
// import { Link } from "react-router-dom";
// // import Sidebar from './Sidebar';



// function Exibutor(){
//     return(

//         <>
//         {/* <Sidebar/> */}
//          <div style={{display: "flex"}}>
//         <div style={{border: "2px solid", width: "19.7%", marginLeft: "20%", marginTop : "4%", borderRadius : "5px"}}>
//         <div class="exibutorcard" style={{width: "18rem"}}>
//   <img src="https://cdn.pixabay.com/photo/2017/10/22/18/16/dog-racing-2878713_1280.jpg" class="card-img-top" alt="..." style={{ width : "115%",height : "30vh", borderRadius : "2px"}}/>
//   <div class="card-bdy" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-ti" style={{textAlign: "center",color : "blue"}}>Dog Shows</h3>
    
//     <p class="card-txt" style={{textAlign: "center", fontWeight : "bold"}}>If You Want to Register</p>
//     <Link to="/exibitionform"><a href="#" class="btn btn-primary" style={{marginLeft: "31%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "19.7%", marginLeft: "4%", marginTop : "4%",borderRadius : "5px"}}>
//         <div class="exibutorcard" style={{width: "18rem"}}>
//   <img src="https://cdn.pixabay.com/photo/2017/08/07/12/52/cat-2603541_960_720.jpg" class="card-img-top" alt="..." style={{ width : "115%",height : "30vh"}}/>
//   <div class="card-bdy" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-ti" style={{textAlign: "center",color : "blue"}}>Cat Shows</h3>
    
//     <p class="card-txt" style={{textAlign: "center",fontWeight : "bold", marginRight: "7%"}}>If You Want to Register</p>
//     <Link to="/exibitionform"><a href="#" class="btn btn-primary" style={{marginLeft: "31%", marginTop: "-5%"}}>Click Here</a></Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "19.7%", marginLeft: "4%", marginTop : "4%",borderRadius : "5px"}}>
//         <div class="exibutorcard" style={{width: "18rem"}}>
//   <img src="https://cdn.pixabay.com/photo/2015/07/08/11/30/camel-836152_1280.jpg" class="card-img-top" alt="..." style={{ width : "115%",height : "30vh"}}/>
//   <div class="card-bdy" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-ti" style={{textAlign: "center",color : "blue"}}>Camel Race</h3>

//     <p class="card-txt" style={{textAlign: "center",fontWeight : "bold"}}>If You Want to Register</p>
//     <Link to="/exibitionform"><a href="#" class="btn btn-primary" style={{marginLeft: "31%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>
// </div>
// <div style={{display: "flex"}}>
//         <div style={{border: "2px solid", width: "19.7%", marginLeft: "20%", marginTop : "4%",borderRadius : "5px"}}>
//         <div class="exibutorcard" style={{width: "18rem"}}>
//   <img src="https://cdn.pixabay.com/photo/2019/12/04/02/13/horse-4671545_1280.jpg" class="card-img-top" alt="..." style={{ width : "115%",height : "30vh"}}/>
//   <div class="card-bdy" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-ti" style={{textAlign: "center",color : "blue"}}>Horse Race</h3>
    
//     <p class="card-txt" style={{textAlign: "center",fontWeight : "bold"}}>If You Want to Register</p>
//     <Link to="/exibitionform"><a href="#" class="btn btn-primary" style={{marginLeft: "31%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "19.7%", marginLeft: "4%", marginTop : "4%",borderRadius : "5px"}}>
//         <div class="exibutorcard" style={{width: "18rem"}}>
//   <img src="https://cdn.pixabay.com/photo/2017/12/17/15/58/mouflon-3024471_1280.jpg" class="card-img-top" alt="..." style={{ width : "115%",height : "30vh"}}/>
//   <div class="card-bdy" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-ti" style={{textAlign: "center",color : "blue"}}>Sheep Fight</h3>
    
//     <p class="card-txt" style={{textAlign: "center",fontWeight : "bold", marginRight : "5%"}}>If You Want to Register</p>
//     <Link to="/exibitionform  "><a href="#" class="btn btn-primary" style={{marginLeft: "31%", marginTop: "-5%"}}>Click Here</a></Link>
//   </div>
// </div>
// </div>

// <div style={{border: "2px solid", width: "19.7%", marginLeft: "4%", marginTop : "4%",borderRadius : "5px"}}>
//         <div class="cardbox" style={{width: "18rem"}}>
//   <img src="https://cdn.pixabay.com/photo/2016/11/04/18/06/pigeons-1798535_1280.jpg" class="card-img-top" alt="..." style={{ width : "115%",height : "30vh"}}/>
//   <div class="card-bdy" style={{marginRight: "-25%", marginLeft: '2%'}}>
//     <h3 class="card-ti" style={{textAlign: "center",color : "blue"}}>Bird Raceing</h3>

//     <p class="card-txt" style={{textAlign: "center",fontWeight : "bold" , marginRight : "10%"}}>If You Want to Register</p>
//     <Link to="/exibitionform"><a href="#" class="btn btn-primary" style={{marginLeft: "31%", marginTop: "-5%"}}>Click Here</a> </Link>
//   </div>
// </div>
// </div>
// </div>

//         </>
//     )
// }
// export default Exibutor;

import React from "react";
import { Link } from "react-router-dom";

function Exibutor() {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {/* First Card */}
        <div
          className="exibutorcard"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/10/22/18/16/dog-racing-2878713_1280.jpg"
            alt="Dog Shows"
            style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Dog Shows</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>If You Want to Register</p>
            <Link to="/exibitionform">
              <a className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>
                Click Here
              </a>
            </Link>
          </div>
        </div>

        {/* Second Card */}
        <div
          className="exibutorcard"
          style={{
            border: "2px solid",
            width: "23%",
            margin: "2%",
            borderRadius: "5px",
            minWidth: "200px",
            maxWidth: "300px"
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/08/07/12/52/cat-2603541_960_720.jpg"
            alt="Cat Shows"
            style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Cat Shows</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>If You Want to Register</p>
            <Link to="/exibitionform">
              <a className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>
                Click Here
              </a>
            </Link>
          </div>
        </div>

        {/* Third Card */}
        <div
          className="exibutorcard"
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
          <img
            src="https://cdn.pixabay.com/photo/2015/07/08/11/30/camel-836152_1280.jpg"
            alt="Camel Shows"
            style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Camel Race</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>If You Want to Register</p>
            <Link to="/exibitionform">
              <a className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>
                Click Here
              </a>
            </Link>
          </div>
        </div>

        {/* Fourth Card */}
        <div
          className="exibutorcard"
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
          <img
            src="https://cdn.pixabay.com/photo/2019/12/04/02/13/horse-4671545_1280.jpg"
            alt="Horse Shows"
            style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Horse Race</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>If You Want to Register</p>
            <Link to="/exibitionform">
              <a className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>
                Click Here
              </a>
            </Link>
          </div>
        </div>

        {/* Fifth Card */}
        <div
          className="exibutorcard"
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
          <img
            src="https://cdn.pixabay.com/photo/2017/12/17/15/58/mouflon-3024471_1280.jpg"
            alt="Sheep Shows"
            style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Sheep Fight</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>If You Want to Register</p>
            <Link to="/exibitionform">
              <a className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>
                Click Here
              </a>
            </Link>
          </div>
        </div>

        {/* Sixth Card */}
        <div
          className="exibutorcard"
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
          <img
            src="https://cdn.pixabay.com/photo/2016/11/04/18/06/pigeons-1798535_1280.jpg"
            alt="Bird Shows"
            style={{ width: "100%", height: "auto", borderRadius: "5px 5px 0 0" }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ textAlign: "center", color: "blue" }}>Bird Race</h3>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>If You Want to Register</p>
            <Link to="/exibitionform">
              <a className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>
                Click Here
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exibutor;
