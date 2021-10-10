import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Brand from "./Component/Brand";
import Influencer from "./Component/Influencer";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/brand' exact component={Brand} />
          <Route path='/influencer' exact component={Influencer} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
