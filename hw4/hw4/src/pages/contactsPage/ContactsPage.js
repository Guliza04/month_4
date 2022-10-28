import React from 'react';

class ContactsPage extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            input: ''

         }
    }

    add =() => {
        this.setState({input: document.querySelector('input').value})
        console.log(document.querySelector('input').value)
    }

    clear =()=>{
        this.setState({input: ''})
        document.querySelector('input').value = ''
    }

    render() {
        return (
            <div>
                  <input type="text"/>
                  <button onClick={this.add}>add</button>
                  <button onClick={this.clear}>clear</button>
            </div>
        );
    }
}

export default ContactsPage;