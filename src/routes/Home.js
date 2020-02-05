import React, { useEffect } from 'react';

import { HorizontalBar, Line, Doughnut} from 'react-chartjs-2';
import dataPie from "../data/dataPie";
import dataBar from "../data/dataBar";
import dataLine from "../data/dataLine";

const Home = () => {

  return (
    <div className="main">
      <div className="main__gray-line"></div>
      <div className="main__title-block">
        <h2 className="main__title-block--title">
          Hi Filip
        </h2>
        <h4 className="main__title-block--subtitle">
          Checkout your latest projects and their progress.
        </h4>
      </div>

      <div className="charts">
        <div className="charts__block charts__line">
          <div className="charts__title-block">
            <div className="charts__title-block--wrapper">
              <h2 className="charts__title-block--title">
              Wavy Lines
            </h2>
              <h4 className="charts__title-block--subtitle">
                Working Hours
              </h4>
            </div>
            <div className="charts__title-block--wrapper">
              <p className="charts__title-block--option">This week</p>
            </div>
          </div>
          <Line data={dataLine} legend={{display: false}}/>
        </div>

        <div className="charts__block charts__pie">
          <Doughnut data={dataPie} legend={{position: 'right'}} options={{cutoutPercentage: 80}}/>
        </div>

        <div className="charts__block charts__bar">
          <HorizontalBar data={dataBar} legend={{display: false}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
