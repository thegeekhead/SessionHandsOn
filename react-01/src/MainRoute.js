import {Route, Routes} from 'react-router-dom';
import React from 'react';
const Home = React.lazy(() =>  import('./component/Home'));
const About = React.lazy(() =>  import('./component/About'));
const Profile = React.lazy(() =>  import('./component/Profile'));

const MainRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
};

export default MainRoute;