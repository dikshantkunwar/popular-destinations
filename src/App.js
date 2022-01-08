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
          imageurl = "https://www.tripsavvy.com/thmb/IkoPZKwM5BmhWB-064flnLZWylo=/3804x3804/smart/filters:no_upscale()/bangkok-at-sunset-5bd5f2f746e0fb005818e042.jpg"
        />
        <div className="mostPopular">
          <span>Most Popular Destination</span>
          <h2>Bangkok</h2>
        </div>
        <Destination 
          destinationName="New Delhi"
          likes={88}
          dislikes={309}
          imageurl = "https://media-cdn.tripadvisor.com/media/photo-s/08/b7/1f/31/qutab-minar.jpg"
        />
      </main>
    </div>
  );
}

export default App;
