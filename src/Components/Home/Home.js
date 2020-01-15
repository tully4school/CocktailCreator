import React, { Component } from "react";
import "./Home.css";
import SearchBar from "../Search/SearchBar";
import Carousel from "../Carousel/Carousel";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        console.log(this.props.data);
        return (
            <>
                <div className='row'>
                    <div className='col-12 d-lg-none mt-5'>
                        <SearchBar />
                    </div>
                </div>
                <div className='row mt-5 mb-3 carousel-row'>
                    <div className='d-flex col-md-12 flex-column justify-content-center'>
                        <h2 className='new-cocktails'>Recent Additions</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <Carousel data={this.props.data} />
                    </div>
                </div>
            </>

        );
    }
}
export default Home;
