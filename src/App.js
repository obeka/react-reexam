import React, { useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Error from './components/Error';
import SyncLoader from "react-spinners/SyncLoader"; //Loading effect from npm

function App() {
  
  const [data, setData] = useState([]); // array of people
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({status:false});

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const linkToAPI = 'https://randomuser.me/api/?results=5';
    setLoading(true);
    try {
      const response = await fetch(linkToAPI);
      if (response.status === 200) {
        const parsedResponse = await response.json();
        setData(parsedResponse.results);
        setLoading(false);
      } else {
        setError({ status: true, message: error })
      }
    } catch (error) {
      setError({ status: true, message: error.message })
      setLoading(false);
    }
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            {error.status && <Error error={error} />}
            {isLoading && <SyncLoader size={40}  color={"crimson"} style={{margin: 'auto'}} />}
            {data.length > 0 && <UserList data={data}/>}
          </Route>
          <Route path='/user/:id' >
            <UserDetails data={data}/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
