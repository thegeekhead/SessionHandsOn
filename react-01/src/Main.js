import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./MainRoute";
import Header from "./component/Header";

const Main = () => {
  return (
    <Suspense fallback="Loading...">
      <Router>
        <Header />
        <MainRoute />
      </Router>
    </Suspense>
  )
}

export default Main;