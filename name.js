import React, { useState } from "react";
// class Name extends Component {
//     state = {name : "Anjali Singh!" };

//     constructor(props){
//         super(props);
//         this.setName = this.setName.bind(this);
//     }
//     setName(e) {
//     this.setState({...this.state,name : "Anjali Singh"})
//     }
//     render(){
//         return(
//         <>
//         <h1> The name is : {this.state.name}</h1>
//         <button onClick={this.setName}> Click Me! </button>
//         </>
//         );

//     }
// }
// export default Name;

const  Name = () => {
    const [state, setState] = useState({name : "Anjali Singh!!!"});
let setName = (e) => {
    setState({...state,name : "Anjali Singh"});
};
testHandler = () => {
    console.log("testHandler");
}
render() {
    return (
        <>
        <h1>The name is : {state.name}</h1>
        <button onClick={setName}>Click Me!</button>
        </>
    );
    }; 
}

export default Name;
