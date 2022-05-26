
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { MainRoutes } from './router/Routers';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainRoutes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
