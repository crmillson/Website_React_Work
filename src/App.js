
import './App.css';
import SearchAppBar from "./Component/NavBar";
import MovieList from "./Component/MovieList";
import {useState} from "react";
import MovieDetails from "./Component/MovieDetails";



function App() {

    //Use State
        const [multipleView, setMultipleView] = useState(true)

    const [singleMovie, setSingleMovie] = useState({}) //Single Empty Object

    // const [singleView,setSingleView] = useState(true);



    //Custom Methods

  return (

    <div className="App">

        <SearchAppBar multipleViewStatus={setMultipleView}/>
        {multipleView ? <MovieList multipleViewStatus={setMultipleView} setSingleMovie={setSingleMovie} /> : <MovieDetails setSingleMovie={setSingleMovie} multipleViewStatus={setMultipleView} singleMovie={singleMovie}/>}
        {/*<MovieDetails />*/}
        {/*<MovieList singleView={singleView} setSingleView={setSingleView(true)} />*/}
        {/*<MovieList />*/}

    </div>
  );
}

export default App;
