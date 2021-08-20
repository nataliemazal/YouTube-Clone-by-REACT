import { Component } from "react";




class Logo extends Component {
    render() {
        return (
            <div className="logo-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube Logo" width={250} />
            </div>
        )
    }
}

export default Logo;