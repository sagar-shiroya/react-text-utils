import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
      <>

        {/* Different kind of props passed to the Navbar component */}
        {/* <Navbar /> */}
        {/* <Navbar title="TextUtils"/> */}
        <Navbar title="TextUtils" aboutText="AboutTextUtils"/>

      </>
  );
}

export default App;
