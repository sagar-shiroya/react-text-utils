import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
      <>

        {/* Different kind of props passed to the Navbar component */}
        {/* <Navbar /> */}
        <Navbar title="TextUtils"/>
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze below"/>
          {/* <About/> */}
        </div>

      </>
  );
}

export default App;