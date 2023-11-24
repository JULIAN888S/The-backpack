
import './App.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/custom.css';

import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import Navigation from './components/Navigation';
import NotesList from './components/NotesList';

import Dba from '../src/components/pages/dba/Dba'
import Content from '../src/components/pages/contents/Content';
import Hability from '../src/components/pages/contents/Hability';
import Theme from '../src/components/pages/contents/Theme';
import Goal from '../src/components/pages/goals/Goal';
import Skill from '../src/components/pages/skills/Skill';
import Result from '../src/components/pages/results/Result';
import ResultCard from '../src/components/pages/results/ResultCard'
import Browser from '../src/components/Browser'
import BackPackModal from '../src/components/BackPackModal'

function App() {
  return (
      <BrowserRouter>
        <Navigation/>
        
        <div className='container'>
          <Routes>
            <Route path="/" element={<NotesList/>}/>
            <Route path="/edit/:id" element={<CreateNote/>}/>
            <Route path="/create" element={<CreateNote/>}/>
            <Route path="/user" element={<CreateUser/>}/>
            <Route path="/dba" element={<Dba/>}/>
            <Route path="/content" element={<Content/>}/>
            <Route path="/hability" element={<Hability/>}/>
            <Route path="/theme" element={<Theme/>}/>
            <Route path="/result" element={<Result/>}/>
            <Route path="/goal" element={<Goal/>}/>
            <Route path="/skill" element={<Skill/>}/>
            <Route path="/resultcard" element={<ResultCard/>}/>
            <Route path="/browser" element={<Browser/>}/>
            <Route path="/backpack" element={<BackPackModal/>}/>
          </Routes>
        </div>
        

      </BrowserRouter>
  );
}



export default App;
