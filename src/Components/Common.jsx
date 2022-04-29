import React from 'react';
import { NavLink } from "react-router-dom"

const Common = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname,
    btnname_2
}) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1> 
                                     {name}
                                     {isCompName ? <strong className="brand-name"> {compName}</strong> : ""}
                                    
                                </h1>
                                <h2 className="my-3">
                                    Quillom is a a Machine Learning app that generates a custom handwritten font with one character
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={visit} className="btn-get-started ">
                                        {btnname}
                                    </NavLink>
                                </div>
                                <div className="mt-3">
                                    <NavLink to={'/about'} className="btn-get-started ">
                                        {btnname_2}
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-image">
                                <img src={imgsrc} className="img-fluid animated" alt="Home Img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Common;
