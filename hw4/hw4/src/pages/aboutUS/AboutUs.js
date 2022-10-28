

import React from "react";

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            check: true
        }
    }
    change = (props)=>{
        this.setState({check: !this.state.check})
    }
    render() {
        return(
            <div>
                {this.state.check?<p>Text</p>:console.log('false')}
                <button onClick={this.change}>Кнопка</button>
            </div>
        )
    }
}
 export default AboutUs;