import {React} from 'react';
import Loadable from 'react-loadable';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Loader from './components/Loader/Loader';



const HomeComponent =  Loadable({
  loader: () => import('./screens/HomeScreen'),
  loading:  Loader

})



const App = () => {

  return(
        <Router>
            <Routes>
                    <Route path='/'  element={<HomeComponent />}/>

            </Routes>
        
        
        
        
        </Router>
  )

}

export default App



