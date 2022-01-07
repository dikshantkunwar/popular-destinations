import './App.css';
import Navigation from './components/Navigation';
import Destination from './components/Destination';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Destination 
          destinationName="Bangkok"
          likes={200}
          dislikes={78}
          imageurl = ""
        />
        <div>
          <span>Most Popular Destination</span>
          <h2>Bangkok</h2>
        </div>
        <Destination 
          destinationName="New Delhi"
          likes={88}
          dislikes={309}
          imageurl = ""
        />
      </main>
    </div>
  );
}

export default App;
