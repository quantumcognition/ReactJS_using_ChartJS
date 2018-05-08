import React, { Component } from 'react';
import './App.css';
import Chart from './Components/chart';
import {Bar, Line, Pie} from 'react-chartjs-2';

class App extends Component {

  constructor(){
    super();
      this.state = {
        thumbnails: [],
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

  
   
    
  componentDidMount(){
   this.getChartData();
   
   console.log(this.state.content);
 }

  getChartData(){
    this.setState({
      chartData:{
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
   })
  }

  render(){   
    return(
        <Chart chartData={this.state.chartData} legendPosition="bottom"/>
      )
  }

}


export default App;
