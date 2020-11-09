import React, { Component } from 'react'

export class Badge extends Component {
    
//default to no badge

    constructor(props) {
        super(props);
        this.state = {
            badge: ""
        };
    }


//     //not sure how to code these, but thinking about ternary qualifiers and then a function that runs all of them simultaneously

//     nickelQualifier(){
//         condition ? this.setState({badge: "nickel"}) : do nothing
//     }

//     bronzeQualifier(){
//         condition ? this.setState({badge: "bronze"}) : do nothing
//     }

//     silverQualifier(){
//         condition ? this.setState({badge: "silver"}) : do nothing
//     }

//     goldQualifier(){
//         condition ? this.setState({badge: "silver"}) : do nothing
//     }
    

//     badgeCreator(){
//         this.nickelQualifier()
//         this.bronzeQualifier()
//         this.silverQualifier()
//         this.goldQualifier()
//     }

    render() {
        return (
            <div>


               <div>{this.state.badge}</div>
              
            </div>
        )
    }
}

export default Badge;
