import './App.css';
import Portfolio from './components/Portfolio';

import filters from './helpers/filters';
import projects from './helpers/projects';

function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Portfolio filters={filters} projects={projects}/>
      </div>
    </div>
  );
}

export default App;