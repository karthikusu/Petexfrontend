import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from './NavigationBar';
import Footer from './Footer'

function Sidebar() {
    useEffect(() => {
        const menuicn = document.querySelector(".menuicn");
        const nav = document.querySelector(".navcontainer");

      //   const toggleNav = () => {
      //     nav.classList.toggle("navclose");
      // };

      // menuicn.addEventListener("click", toggleNav);

      
      // return () => {
      //     menuicn.removeEventListener("click", toggleNav);
      // };
    }, []); 

    return (
        <>
          {/* <NavigationBar/> */}
          {/* <header>
          <div className="logosec">

                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
                        className="icn menuicn"
                        id="menuicn"
                        alt="menu-icon"
                    style={{ marginLeft: "35%" , height:"60px", width:"60px"}}/>
                </div>
          </header> */}
          
            <div className="main-container" style={{marginTop:"-1%", background: 'linear-gradient(rgb(239, 192, 240), rgb(192, 240, 193))'}}>
                <div className="navcontainer">
                    <nav className="nav">
                        <div className="nav-upper-options">
                            <div className="nav-option option1">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/6051/6051886.png"
                                    className="nav-img"
                                    alt="dashboard"
                                    style={{ width : "25px", height : "25px"}} />
                                <h4> Home</h4>
                            </div>

                            <div className="option2 nav-option">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/9513/9513736.png"
                                    className="nav-img"
                                    alt="articles"
                                    style={{ width : "25px", height : "25px"}}/>
                               <Link to="Pets"><h4 style={{textDecoration:"none", color:"white"}}>Pet type</h4></Link>
                            </div>
                            <div className="nav-option option3">
                                <img
                                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/new-item-4379581-3634816.png"
                                    className="nav-img"
                                    alt="report"
                                    style={{ width : "25px", height : "25px"}} />
                                <h4>Items</h4>
                            </div>
                            <div className="nav-option option4">
                                <img
                                    src="https://cdn-icons-png.freepik.com/512/6069/6069189.png"
                                    className="nav-img"
                                    alt="institution"
                                    style={{ width : "25px", height : "25px"}} />
                               <h4>Doctor</h4>
                            </div>
                            <div className="nav-option option5">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1189/1189156.png"
                                    className="nav-img"
                                    alt="blog"
                                    style={{ width : "25px", height : "25px"}} />
                                <h4>Assistance</h4>
                            </div>

                            <div className="nav-option option6">
                                <img
                                    src="https://cdn-icons-png.freepik.com/512/771/771203.png"
                                    className="nav-img"
                                    alt="settings"
                                    style={{ width : "25px", height : "25px"}}  />
                                <h4>Services</h4>
                            </div>
                            <div className="nav-option option6">
                                <img
                                    src="https://media.istockphoto.com/id/1179398744/vector/history-icon-elegant-blue-round-button-illustration.jpg?s=170667a&w=0&k=20&c=D_7Xx6s1jhBXj7v1uk9rXItkuI6KsM9xAshaki6uuvg="
                                    className="nav-img"
                                    alt="settings"
                                    style={{ width : "25px", height : "25px"}}  />
                                <h4>History</h4>
                            </div>
                            <div className="nav-option logout">
                                <img
                                    src="https://img.freepik.com/free-photo/shut-down-icon-front-side_187299-39674.jpg?t=st=1708586797~exp=1708590397~hmac=6d28bcf78e15e0fb51b65a6f674b31a975bed03de8b7bc2acfa26b873a1ed0b5&w=740"
                                    className="nav-img"
                                    alt="logout"
                                    style={{ width : "25px", height : "25px"}}/>
                                <h4>Logout</h4>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            
            {/* <Footer/> */}
        </>
    );
}

export default Sidebar;

// Internal CSS styles
const styles = `
/* Resetting default margins and paddings */
body, h1, h2, h3, h4, p, ul {
  margin: 0;
  padding: 0;
}

/* Setting box-sizing to border-box for easier sizing */
* {
  box-sizing: border-box;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgb(0, 22, 122);
  color: #fff;
  height: 13vh;
}

.logosec {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 24px;
  margin-right: 5px;
}

.icn {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.dp {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2%;
}

.dpicn {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Styling the sidebar */
.main-container {
  display: flex;
}

.navcontainer {
  width: 240px;
  height: 100vh;
  background-color: rgb(86, 75, 173);
  color: white;
  transition: transform 0.3s ease;
  overflow-y: auto;
}

.navclose {
  transform: translateX(-250px);
}

.nav {
  padding: 20px;
}

.nav-option {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-option:hover {
  background-color: #b3bbd6;
  width: 210px;
}

.nav-img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

/* Styling the logout option */
.logout {
  margin-top: auto;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
  .navcontainer {
    width: 200px;
  }
}
`;

// Add internal styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
