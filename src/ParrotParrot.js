import React from "react";

const Parrot = () => {
    return (
        <>
            <style>
                {`
                .cropped2 {
                    width: 1500px; /* width of container */
                    height: 450px; /* height of container */
                    object-fit: cover;
                    object-position: 20% 20%; /* try 20px 10px */ 
                }
                `}
            </style>
            <div>
                <img className="cropped2" src="https://media.istockphoto.com/id/986258762/photo/young-woman-reads-and-snuggles-with-her-pet-bunny.jpg?s=612x612&w=0&k=20&c=XYqQutIs9BLN8PEqpyZ4sopVHSjiZoNycn4RKXZO1yI=" alt="" />
            </div>

            <h1 style={{textAlign:'center'}}>Parrot Training</h1>
        </>
    );
}
export default Parrot;
