import React from "react"

class AboutList extends React.Component {


    render() {
        return <React.Fragment>
            <button className="about-button">send</button>
            <h3>This is a text</h3>
        </React.Fragment>
      }
}



function ProposCard() {
    return (
        <div className="propos-container">
            <nav>
                <AboutList />
            </nav>
        </div>
    )
}

export default ProposCard