import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import HelloWorld2 from "./Components/HelloWorld2";
// import Counter from "./Components/Counter";
import About from "./Views/About";
import Home from "./Views/Home";
import Product from "./Views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        {/* <HelloWorld2 name="Akintimehin"/> */}
        {/* <Counter /> */}

        <div className="pt-12">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
