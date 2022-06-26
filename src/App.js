import { useState } from 'react';
import './Reset.css'
import './GlobalStyles.css'
import Start from './Start.js'
import Galaxy from './Galaxy.js'
function App() {
  const [launch,setLaunch] = useState(false)
  return (
    <div className="App" style={{width: '100%', maxWidth: '1920px', margin: '0 auto'}}>
      {!launch && <Start onClick={()=>{setLaunch(!launch)}}/>}
      {launch && <Galaxy/>}
    </div>
  );
}

export default App;
