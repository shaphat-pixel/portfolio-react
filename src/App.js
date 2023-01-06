import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TwitterBuildsPage from "./pages/TwitterBuildsPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";
import ArticlesPage from "./pages/ArticlesPage";


function App() {
  return (


    <div className="">
    <Router>
     
        <Route component={ProfilePage} path="/" exact />
        <Route component={TwitterBuildsPage} path="/twitter-builds" exact />

        

        <Route component={ProjectsPage} path="/projects" exact />


        <Route component={ArticlesPage} path="/articles" exact />

      
    </Router>
  </div>

  );
}

export default App;
