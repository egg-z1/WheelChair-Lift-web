import React from 'react';
import './App.css';
import Topbar from './components/topbar/topbar';
import Sidebar from './components/sidebar/sidebar';
import Echart1 from './components/echart/echart1';
import Echart2 from './components/echart/echart2';
import Echart3 from './components/echart/echart3';
import Echart4 from './components/echart/echart4';
import EchartWheel from './components/echart/echart_wheel';

const App = () => {
  return (
    <div className='App'>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>
          <Echart1 />
          <Echart2 />
          <Echart3 />
          <Echart4 />
          <EchartWheel />
        </div>
      </div>
    </div>
  );
}

export default App;
