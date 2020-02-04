const pinkColor = 'rgba(227, 69, 140, 0.7)';
const purpleColor = 'rgba(140, 94, 231, 0.7)';

const dataLine = {
  labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06', '06.06', '07.06', '08.06', '09.06',],
  datasets: [
    {
      label: '',
      fill: true,
      lineTension: 0.5,
      backgroundColor: pinkColor,
      border: 'none',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointBorderWidth: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'gray',
      pointHoverBorderWidth: 3,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 50, 35, 3, 49, 28, 31, 40, 35, 30, 55]
    },
    {
      label: '',
      fill: true,
      lineTension: 0.5,
      backgroundColor: purpleColor,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: 'rgba(0, 0, 0, 0)',
      pointBackgroundColor: 'rgba(0, 0, 0, 0)',
      pointBorderWidth: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: 'white',
      pointHoverBorderColor: 'gray',
      pointHoverBorderWidth: 3,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [20, 28, 50, 54, 30, 12, 15, 20, 55, 60, 55]
    }
  ]
};

export default dataLine;
