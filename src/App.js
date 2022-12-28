import './App.css';
import HomeContainer from "./containers/HomeContainer";
import HeaderContainer from "./containers/HeaderContainer";


function App() {
  return (
    <div className="App">
        <h1>Shopping Cart</h1>
        <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
