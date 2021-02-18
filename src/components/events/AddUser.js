import React, {useState} from 'react';
//import {gql} from 'apollo-boost';
//import { Query, Mutation } from 'react-apollo';

import { gql, useMutation } from '@apollo/client';
//import { gql, useMutation } from '@apollo/client'

//import { SIGNUP_TODOS } from '../constants';


// const ADD_TODO = gql`
//   mutation addAuthors($username: String!, $password: Int!) {
//     addAuthors(username: $password, password: $password) {
//       name
//       age
//     }
//   }
// `;
//createUsersInput: CreateUsersInput!
const SIGNUP_TODOS = gql 
`mutation singUp($createUsersInput: CreateUsersInput) {
  signUp(createUsersInput: $createUsersInput) {
    Username
    Password
  }
}`;
function AddUser() {

    const [formState, setFormState] = useState({
        name: '',
        age: ''
      });

    const [createLink] = useMutation(SIGNUP_TODOS, {
        variables: {
            usersInput:{
                Username: formState.name,
                Password: formState.age
            }
          
        }
      });



        
    return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div>
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            
          />
          <input
          type="text"
            value={formState.age}
            onChange={(e) =>
              setFormState({
                ...formState,
                age: e.target.value
              })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }


export default AddUser;
