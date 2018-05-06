import React, { Component } from 'react';
import './App.css';
import Chart from './Components/chart';
import {Bar, Line, Pie} from 'react-chartjs-2';

class App extends Component {

  constructor(){
    super();
      this.state = {
        chartData: {
        labels: ['Boston','Worcester','Springfield','Lowell','Cambridge','New Bedford'],
        
        datasets: [{
          label:'Population',
          
          data:[
            617593,
            181045,
            113123,
            123124,
            643212,
            532112,
          ],

          backgroundColor: ['#2681dc','#000000','#22334e','#900C3F','#FF5733','#581845']

        }]
      }

      }
  }

  componentWillMount(){
    this.getChartData();
    

  }

  getChartData(){
    // this.setState = ({
    //   chartData: 
    // });

  }

  render(){   
    return(
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      )
  }

}


//  // constructor(){
//     super();
//     this.state = {
//       thumbnails: [],
//       content:{a:1, b:2}
//     };
//   }

//   componentDidMount(){
//    fetch('https://jsonplaceholder.typicode.com/photos')
//    .then(response => response.json())
//    .then(parsedJSON => {
//     console.log(parsedJSON);
//     this.setState({
//       thumbnails: parsedJSON,
     
//    } )

//   })
//    console.log(this.state.content);
//  }

//   render() {
//     return (    
//       <div >
//       {
//         this.state.thumbnails.map((dat,key) => 

//         <div> 
//           <a href={dat.thumbnailUrl} target="_blank">
//           <img src={dat.thumbnailUrl} type="button"></img>     
//           </a>
//           </div>
          
//         )

        
//       }

//       </div>

//     );
//   }
// }

export default App;
