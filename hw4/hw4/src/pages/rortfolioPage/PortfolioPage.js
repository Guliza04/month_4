import React from 'react';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            works: []

        }

    }
    change = () =>{
        this.setState({works:["Work1", "Work2"]}  )
    }


    render() {
        return (
            <div>
                <button onClick={this.change}>Get</button>
                <ul>
                    {this.state.works.map((e)=> {return<li>{e}</li>})}
                </ul>
            </div>
        );
    }
}

export default PortfolioPage;
