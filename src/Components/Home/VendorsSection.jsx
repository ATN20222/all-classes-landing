import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import vendorImage from '../../Assets/Images/Circle-K-Emblem.png'
const VendorsSection = ()=>{
    const vendors = [
        {
            id:1, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:2, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:3, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:4, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:5, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:6, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:7, 
            name:'CircleK',
            image:vendorImage,
        },
        {
            id:8, 
            name:'CircleK',
            image:vendorImage,
        }
    ];
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://yellowgreen-raccoon-480548.hostingersite.com/api/all/brands',{
            method: 'GET', 
            headers: {
              'Accept': 'application/json',          
              'Content-Type': 'application/json',     
              'Database-App': 'mind'                  
            }
          })
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
            return response.json(); 
        })
        .then(data => {
            console.log(data); 
            setData(data.content)
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });

    },[]);
    return(
        data.length>0?
            (<section className="AllSection VendorsSection"  data-aos='fade-up'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="Center SectionTitle">Our Vendors</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="row Center">
                                {data.map((vendor)=>(
                                    <div className="col-lg-2 col-md-3 col-sm-4 col-8 p-3" key={vendor.id}>
                                        <div className="VendorCard card p-4">
                                            <div className="VendorImage Center">
                                                <img src={vendor.image} width="80%" alt="" srcset="" />
                                            </div>
                                            <div className="VendorTitle mt-1">
                                                <h3>{vendor.name}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
        :
        <></>
        
    );
}
export default VendorsSection;