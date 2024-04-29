import React from 'react';
import Image from "next/image";

const Publications = () => {
    return (
        <div>
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" >


                <div className = "flex items-center flex-col p-10 bg-gray-300 gap-4">
                <Image src = "https://i.ibb.co/ZVbzHYT/qmh.png" alt ="logo image " width = {100} height = {100} >
                    </Image> 
                <p className = "text-2xl">Recent Publication</p>
                <button className = "btn btn-outline"> details</button>
                </div>


                <div className = "flex items-center flex-col p-10 bg-purple-300 gap-4">
                <Image src = "https://i.ibb.co/ZVbzHYT/qmh.png" alt ="logo image " width = {100} height = {100} ></Image> 
                <p className = "text-2xl">Recent Publication</p>
                <button className = "btn btn-outline"> details</button>
                </div>


                <div className = "flex items-center flex-col p-10 bg-blue-300 gap-4">
                <Image src = "https://i.ibb.co/ZVbzHYT/qmh.png" alt ="logo image " width = {100} height = {100} ></Image> 
                <p className = "text-2xl">Recent Publication</p>
                <button className = "btn btn-outline"> details</button>
                </div>


                <div className = "flex items-center flex-col p-10 bg-green-300 gap-4">
                <Image src = "https://i.ibb.co/ZVbzHYT/qmh.png" alt ="logo image " width = {100} height = {100} ></Image> 
                <p className = "text-2xl">Recent Publication</p>
                <button className = "btn btn-outline"> details</button>
                </div>
            </div>
        </div>
    );
};

export default Publications;