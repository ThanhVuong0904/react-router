import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect, useParams } from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Error from './components/Error';
import PostItem from './components/PostItem';
import PostDetail from './components/PostDetail';
import {Helmet} from "react-helmet";

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  
  const getData = () => {
      const API_F8 = 'https://api-gateway.fullstack.edu.vn/api/courses/featured'
      fetch(API_F8)
      .then(res => res.json())
      .then(posts => {
            setPosts(posts.data)
      })
  }
  useEffect(() => {
      getData();
  }, [])
  return (
    // <Router>
    //   <Navigation />
    //   <Switch>
    //     <Route exact path="/" component={Home}/>
    //     <Route path="/products" component={Products}/>
    //     <Route path="/about" component={About}/>
    //     <Route path="/:somestring" component={Error}/>
    //   </Switch>
    // </Router>
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>F8</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Route exact path="/">
        <PostItem data = {posts}/>
      </Route>
      <Route path="/course/:slug">
        <PostDetail data = {posts} />
      </Route>
    </Router>
  );
}

export default App;
