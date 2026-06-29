import ReactFullpage from '@fullpage/react-fullpage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './main/Home';
import Project1 from './main/Project1';
import Project2 from './main/Project2';
import Project3 from './main/Project3';
import Project4 from './main/Project4';
import Project5 from './main/Project5';
import './App.css';
import './css/main.css'

const MainFullPage = () => {
  return (
    <ReactFullpage
        licenseKey={'For_portfolio'}
        key="main-fullpage-key" 
        navigation={false}
        showActiveTooltip={true}
        normalScrollElements=".device2, .device3, .device4, .play_pic"
        slidesNavigation={false}
        controlArrows={false}
        verticalCentering={false} 

        anchors={['home', 'project1', 'project2', 'project3','project5', 'project4']}
        navigationTooltips={['홈', '플레이스테이션', '블랑네이쳐', '아식스','대학로티켓', '강의']}
        scrollingSpeed={800}
        responsiveWidth={991}

        render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
            <Home fullpageApi={fullpageApi} />
            <Project1 fullpageApi={fullpageApi} />
            <Project2 fullpageApi={fullpageApi} />
            <Project3 fullpageApi={fullpageApi} />
            <Project5 fullpageApi={fullpageApi} />
            <Project4 fullpageApi={fullpageApi} />
        </ReactFullpage.Wrapper>
        )}
    />
  );
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainFullPage />} />
      </Routes>
    </>
  );
}

export default App;