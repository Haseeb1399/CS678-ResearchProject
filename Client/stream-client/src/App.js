import {Button,Card,CardGroup,CardImg,CardBody,CardTitle,CardSubtitle,CardText} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, Routes, Link} from 'react-router-dom'
import image from './number1.png'
import StreamOne from './Components/Stream_One/stream_one';
import StreamTwo from './Components/Stream_Two/stream_two';
import StreamThree from './Components/Stream_Three/stream_three';
import MainPage from './Components/mainPage/main';

function App() {

  return (    
    <div>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/streamOne' element={<StreamOne/>}/>
      <Route path='/streamTwo' element={<StreamTwo/>}/>
      <Route path='/streamThree' element={<StreamThree/>}/>
    </Routes>
    </div>
  );
}

export default App;
