import React, { Component } from 'react';

class Home extends Component {
    render(){
       return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            DA ZAREDIM KARTINKA
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            DA ZAREDIM KOMPONENT
                        </div>
                    </div>
                </div>
            </div>
        </div>
       )
    }
}
export default Home;