import React from "react";
import { Link } from "react-router-dom";
import CommonNav from './CommonNav';

function Training22(){
    return(
        <>
        <style>
            {`
            *{
                margin: 0;
                padding: 0;
                font-family:Verdana, Geneva, Tahoma, sans-serif
            }
            .t22body{
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                background: whitesmoke;
            }
            .header_containerss{
                padding: 1rem 1rem 5rem 1rem;
            }
            .header_image_containerxyz{
                position: relative;
                min-height: 500px;
                background-image: linear-gradient(to right, rgba(44,56,85,.9), rgba(100,125,187,0.5)), url("images/Mokey.jpg");
                background-position: center center;
                background-size: cover;
                background-repeat: no-repeat;
                border-radius: 2rem;
            }
            .t22header_content{
                max-width: 600px;
                padding: 5rem 2rem;
                color: #e1dfdf;
                text-decoration: none;
            }
            .training22_h1{
                font-size: 3.5rem;
                line-height: 4rem;
                font-weight: 600;
                color: var(--white);
            }
            .training22_p{
                color: var(--white);
            }
            .t22container{
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                background-color: rgb(237, 234, 234);
            }
            .t22container .t22card{
                position: relative;
                width: 400px;
                height: 220px;
                margin: 20px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            img{
                object-fit: cover;
                height: max(15rem, 31vh);
            }
            .t22container .t22card .contentuday {
                position: absolute;
                color: whitesmoke;
                font-size: 10px;
                border-top-left-radius: 40px;
                border-top-right-radius: 40px;
                bottom: -160px;
                width: 100%;
                height: 160px;
                backdrop-filter: blur(5px);
                box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
                border: 1px solid rgba(255 , 255, 255, 0.2);
                transition: bottom 0.5s;
            }
            .t22container .t22card:hover .contentuday{
                bottom:  0px;
            }
            .training22_h5{
                font-size: 15px;
            }
            `}
        </style>

        <body className="t22body">
            {/* <CommonNav/> */}
            <section>
                <div className="header_containerss">
                    <div className="header_image_containerxyz">
                        <div className="t22header_content">
                            <h1 className="training22_h1">Train Your Pet in Better Way</h1>
                            <p className="training22_p">dogs, cats, rabbits, parrots, salamanders</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="t22container">
                    {/* -------------- */}
                    <div className="t22card">
                        <div className="imgBx">
                            <img src="https://cdn.wallpapersafari.com/16/50/SDBgvI.jpg" alt="" />
                        </div>
                        <div className="contentuday">
                            <div className="contentBx " style={{padding:'10px', transition:"0.5s"}}>
                                <h3 style={{textAlign:'center'}}>Dog:</h3><br></br>
                                <Link style={{textDecoration:"none", color:'whitesmoke'}} to="/DogDogData"><h5 className="training22_h5">Dogs should be allowed as much liberty as they can responsibly handle. The greatest gift of training is that it increases the dog’s ability to handle liberty.</h5></Link>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    <div className="t22card">
                        <div className="imgBx">
                            <img src="https://i.imgur.com/2auciE0.jpg" alt="" />
                        </div>
                        <div className="contentuday">
                            <div className="contentBx" style={{padding:'10px',transition:"0.5s"}}>
                                <h3 style={{textAlign:'center'}}>Cat:</h3><br></br>
                                <Link style={{textDecoration:"none", color:'whitesmoke'}} to="/CatCatData"><h5 className="training22_h5">Dogs should be allowed as much liberty as they can responsibly handle. The greatest gift of training is that it increases the dog’s ability to handle liberty.</h5></Link>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    
                    {/* -------------- */}
                </div>
            </section>
            <section>
                <div className="t22container">
                    {/* ------------- */}
                    <div className="t22card">
                        <div className="imgBx">
                            <img src="https://wallpaperset.com/w/full/f/0/3/95483.jpg" alt="" />
                        </div>
                        <div className="contentuday">
                            <div className="contentBx " style={{padding:'10px', transition:"0.5s"}}>
                                <h3 style={{textAlign:'center'}}>Elephant:</h3><br></br>
                                <Link style={{textDecoration:"none", color:'whitesmoke'}} to="/Elephant2Data"><h5 className="training22_h5">Dogs should be allowed as much liberty as they can responsibly handle. The greatest gift of training is that it increases the dog’s ability to handle liberty.</h5></Link>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    <div className="t22card">
                        <div className="imgBx">
                            <img src="https://getwallpapers.com/wallpaper/full/a/4/2/705892-cute-monkey-backgrounds-1920x1080-for-windows-10.jpg" alt="" />
                        </div>
                        <div className="contentuday">
                            <div className="contentBx" style={{padding:'10px',transition:"0.5s"}}>
                                <h3 style={{textAlign:'center'}}>Monkey:</h3><br></br>
                                <Link style={{textDecoration:"none", color:'whitesmoke'}} to="/MonkeyData"><h5 className="training22_h5">you need to have something your cat likes. Although it would be nice if a cat would do something just to be told “Good cat!” it doesn't work that way</h5></Link>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    
                    {/* -------------- */}
                </div>
            </section>
            <section>
                <div className="t22container">
                    {/* ------------- */}
                    <div className="t22card">
                        <div className="imgBx">
                            <img src="https://wallpapers.com/images/hd/desert-camel-photography-6avv99mga9k95hm8.jpg" alt="" />
                        </div>
                        <div className="contentuday">
                            <div className="contentBx" style={{padding:'10px', transition:"0.5s"}}>
                                <h3 style={{textAlign:'center'}}>Camel:</h3><br></br>
                                <Link style={{textDecoration:"none", color:'whitesmoke'}} to="/DogDogData"><h5 className="training22_h5">when you look at a bunny and can see only a pest, or vermin, or a meal, or a commodity, or a laboratory subject, you aren't seeing the bunny anymore.</h5></Link>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    <div className="t22card">
                        <div className="imgBx">
                            <img src="https://images.wallpaperscraft.com/image/single/rabbits_couple_grass_44836_1920x1080.jpg" alt="" />
                        </div>
                        <div className="contentuday">
                            <div className="contentBx" style={{padding:'10px', transition:"0.5s"}}>
                                <h3 style={{textAlign:'center'}}>Rabbit:</h3><br></br>
                                <Link style={{textDecoration:"none", color:'whitesmoke'}} to="/RabbitRabbitData"><h5 className="training22_h5">Dogs should be allowed as much liberty as they can responsibly handle. The greatest gift of training is that it increases the dog’s ability to handle liberty.</h5></Link>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    
                    {/* -------------- */}
                </div>
            </section>
        </body>
        </>
    );
}
export default Training22;
