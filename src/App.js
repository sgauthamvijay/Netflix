
import './App.css';
import Row from './Row'
import requests from './requests';
import Navbar from './Navbar';



function App() {
  return (





    <div className="App">

      <Navbar />

      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} /> 
      <Row title="TRENDING" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />

      <Row title=" COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title=" HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTIRIES" fetchUrl={requests.fetchDocumentaries} />


    </div>


  );
}

export default App;
