import React from 'react';
import applelogo from '../images/apple.svg';
const Slidertest = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={applelogo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={applelogo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card mb-3" style={{ maxWidth: '100%', maxHeight: '100%' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={applelogo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ color: "black" }}>
                <span className="carousel-control-prev-icon" aria-hidden="true">hh</span>
                <span className="sr-only">Previous</span>
            </a>

            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ color: "black" }}>
                <span className="carousel-control-prev-icon" aria-hidden="true">hh</span>
                <span className="sr-only">Previous</span>
            </a>

        </div>
    );
};

export default Slidertest;
