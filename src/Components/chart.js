import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';


class Chart extends Component {

	constructor(props){
		super(props);
		this.state = {
			chartData: props.chartData
		}
		
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right'

	}	


	render(){
		return(
			<div className="Chart">
				<Bar
				data={this.state.chartData}
				options={{
					title:{
						display:this.props.displayTitle,
						text: 'Largest cities in MA',
						fontSize: 24,
						height:100,
						width:100
					},
					legend:{
						display:this.props.displayLegend,
						position:'right'
					}

				}}
				/>

				<Line
				data={this.state.chartData}
				options={{
					title:{
						display:this.props.displayTitle,
						text: 'Largest cities in MA',
						fontSize: 24
					},
					legend:{
						display:this.props.displayLegend,
						position:'right'
					}

				}}
				/>

				<Pie
				data={this.state.chartData}
				options={{
					title:{
						display:this.props.displayTitle,
						text: 'Largest cities in MA',
						fontSize: 24
					},
					legend:{
						display:this.props.displayLegend,
						position:'right'
					}

				}}
				/>

			</div>
		)
	}
}

export default Chart;