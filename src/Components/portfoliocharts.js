import React from "react";
// import { MDBContainer } from "mdbreact";
import { PolarArea } from "react-chartjs-2";

const PolarAreaChart = () => {

// Sample data
const data = {
	labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
	datasets: [
		{
		label: "Hours Studied in Geeksforgeeks",
		data: [2, 5, 6, 7, 3],
		backgroundColor: ["blue", "green", "yellow", "pink", "orange"],
		}
	]
}

return (
	
	<PolarArea data={data} />
	
);
}




export default PolarAreaChart;
