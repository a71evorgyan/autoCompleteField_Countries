import React, { Component } from 'react';
import '../Stylesheets/App.css';
import data from '../data.json';


const arr = data.map((elem, index) => data[index].name);
class Countries extends Component {
    state = {
        value: '',
        arrOfCountries: []
    }


    handleChange = (event) => {
        
        let filteredArr = arr.filter((elem) => elem.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
        this.setState({
            value: event.target.value,
            arrOfCountries: filteredArr,
        });         
    }

    

    render() {
        
        
        let array = this.state.arrOfCountries.map((elem, index) => <div key={index} className="rowsOfTable">{elem}</div>);
        
        return (
        <form>
            
            <input placeholder="Country" className="Input" value={this.state.value} onChange={this.handleChange}></input>
            <div className="tableOfCountries">
              {(this.state.value.length < 1) ? null : array}
            </div>
        </form>
        );
    }
}

// class App extends Component {
//     state = {
//         value: ""
//     }

//     filterArray = (input) => {
//       return data.filter((el) => {
//           return el.name.toString().toLowerCase().indexOf(input.toLowerCase()) > -1;
//       });
//     }

//     handleChange = (event) => {
//         this.setState({value: event.target.value});
//     }


//   render() {
//     return (
//       <form>
//         <div id="parent">
//           <select value={this.state.value} onChange={this.handleChange}>
//           {this.filterArray(this.state.value).map(elem => <option>{elem}</option>)}
//           </select>
//         </div>
//       </form>
//     );
//   }
// }

// class App extends Component {
 
//       state = {
//           inputvalue: '',
//           array: []
//       }
      
// autocomplete = (value) => {
//     data.filter((el) => {return el.toString().toLowerCase().indexOf(value.toLowerCase()) > -1;})
// }
  
//   handleChange = (event) => {
//     this.setState({
//         inputvalue: event.target.value,
//     })
// }

//   handleSubmit = (event) => {
//     this.setState((prev) => ({
//         array: [...prev.array, this.state.inputvalue],
//         inputvalue: ''
//     }));
//     event.preventDefault();
    
//   }
   
  
  
//   render() {
//     return (
//       <div className="App">
//           <form onSubmit={this.handleSubmit}>
//               <label>Name</label>
//               <input type="text" value={this.state.inputvalue} onChange={this.handleChange}/> 
//               {/* <Autocomplete filteredArr={this.autocomplete(this.state.inputvalue)}/>    */}
//               <input type="submit" value="Submit"/>
//           </form>
//       </div>
//     );
//   }
// }
 export default Countries;




