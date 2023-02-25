import './App.css';
import {Header} from './components';
import Payment from './components/Payment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="Root">
     <Header/>
     <Payment/>
     <Footer/>
    </div>
  );
}

export default App;
