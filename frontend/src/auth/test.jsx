import React from 'react';

class Test extends React.Component {
    logOut = () => {
        localStorage.clear();
        this.props.history.push('/login');
    };

    render() {
        return <button className="btn btn-primary " onClick={this.logOut}>Logout</button>
    }
}

export default Test;