import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Welcome from './pages/welcome';
import './sass/main.scss';

import SignUp from './components/sign-Up';
import Tearm from './pages/ourterm';
import Abouts from './pages/aboutus';
import Blog from './pages/blogsp';
import Testimonials from './pages/testimonials';
import Jobs from './pages/jobs';
// import Dashboard from './components/dashboard1/dashboards';
import GetOneJobs from './pages/getOneJobs';
import ReadmorePage from './pages/getReadmorep';
import Dashboards from './pages/dashboard';
import Post from './components/dashboard/PostBlogs/blogsForm';
// import Dashboards from './pages/dashboards';


function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path='/alight' element = {<Welcome/>}></Route>
        <Route path='/team' element = {<Tearm/>}></Route>
        <Route path='/signUp' element = {<SignUp/>}></Route>
        <Route path='/About' element = {<Abouts/>}></Route>
        <Route path='/Blog' element = {<Blog/>}></Route>
        <Route path='/testimonial' element = {<Testimonials/>}></Route>
        <Route path='/job' element = {<Jobs/>}></Route>
        <Route path='/getjob' element = {<GetOneJobs/>}></Route>
        <Route path='/getreadmore' element = {<ReadmorePage/>}></Route>
        {/* <Route path='/dashboard' element = {<Dashboards/>}></Route>
        <Route path='/dashboards' element = {<Dashboard/>}></Route> */}
      <Route path='/dashboards' element = {<Dashboards/>}></Route> 
      <Route path='/blogpost' element = {<Post/>}></Route>
      </Routes>
    </Router>
  
  </>
  
  );
}

export default App;
