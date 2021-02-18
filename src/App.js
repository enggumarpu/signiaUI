import  { useState, useEffect, useReducer } from 'react';
import './App.css';
import AppRouter from './routes';
import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/client';
import { GRAPHQL_API } from './components/constants';
import {AuthContext} from './DispatchContext';
import { setContext } from '@apollo/client/link/context';


const httpLink = new HttpLink({ uri: GRAPHQL_API, });
const token = JSON.parse(localStorage.getItem('token'));
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null,
    }
  });
  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = JSON.parse(localStorage.getItem('token'));
//   console.log(token);
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     }
//   }
// });



// const client = new ApolloClient({
//   uri: GRAPHQL_API,
//   cache: new InMemoryCache ()
// });



function App() {


  const [userDetails, setUserDetails] = useState();
  const [userNamePass, setUserNamePass] = useState();
  const [token, setToken] = useState();

  const login = (token, userDetails) => {
    
    setUserDetails(userDetails);
    setToken(token);
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('user', JSON.stringify(userDetails));
    
};

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
};

  const userNamePassword = (userna) => {
    setUserNamePass(userna);
  } 
  
  // const [data, setData] = useState( { getAllEvents: [] } );

  // useEffect( () => {
  //     const fetchData = async () => {
  //       const queryResult = await axios.post (
  //         Constants.GRAPHQL_API, {
  //            query: Constants.GET_EVENT_QUERY
  //         }
  //       );
  //       const result = queryResult.data.data;
  //       setData({ getAllEvents: result.getAllEvents})   
  //     };
  //     fetchData();
  //     console.log(fetchData());
  //   }
  // )


  return(
    <AuthContext.Provider value={{token, userDetails, login, logoutUser, userNamePassword, userNamePass}} >
    <ApolloProvider client={client}> 
        
      {/* <h1> List Of Events </h1>
      <ul>
        {data.getAllEvents.map(item => (
          <li key = {item.id}>
          <API item={item} />
          </li>
        ))}
      </ul> */}
      
      <AppRouter />
      <div>{console.log('app', userDetails)}</div>
    </ApolloProvider>
    </AuthContext.Provider>
  );
}

export default App;
