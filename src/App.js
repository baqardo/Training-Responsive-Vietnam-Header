import "./App.scss";
import Header from "./components/Navigation/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
    </div>
  );
}

export default App;
