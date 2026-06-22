import ReactFullpage from '@fullpage/react-fullpage';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './main/Home';
import Project1 from './main/Project1';
import Project2 from './main/Project2';
import Project3 from './main/Project3';
import './App.css';
import './css/main.css'

const MainFullPage = () => {
  return (
    <ReactFullpage
        licenseKey={'For_portfolio'}
        key="main-fullpage-key" 
        navigation={true}
        showActiveTooltip={true}
        normalScrollElements=".my-nested-swiper"
        slidesNavigation={false}
        controlArrows={false}
        verticalCentering={false} 

        anchors={['home', 'project1', 'project2', 'project3']}
        navigationTooltips={['홈', '프로젝트_1', '프로젝트_2', '프로젝트_3']}
        scrollingSpeed={800}
        responsiveWidth={991}

        render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
            <Home fullpageApi={fullpageApi} />
            <Project1 fullpageApi={fullpageApi} />
            <Project2 fullpageApi={fullpageApi} />
            <Project3 fullpageApi={fullpageApi} />
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