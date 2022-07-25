import './Reset.css'
import './Components/GlobalStyles.css'
import { Routes, Route } from 'react-router';
import Story from './Components/Story';
import Starter from './Components/Starter';
import Portfolio from './Components/Portfolio';
function App() {

  return (
    <div className="App" style={{ width: '100%', maxWidth: '1920px', margin: '0 auto', height: '100vh', boxSizing: 'border-box', padding: '0' }}>
        <Routes>
          <Route path='/Portfolio-React' element={<Starter />} />
          <Route path="/Portfolio-React/Story" element={<Story />} />
          <Route path="/Portfolio-React/Page" element={<Portfolio />} />
        </Routes>
    </div>
  );
}

export default App;
