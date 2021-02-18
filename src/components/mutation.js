// import React from 'react';
// import { SIGN_IN } from './constants';
// import { gql, useMutation } from '@apollo/client'
// import { useQuery } from '@apollo/client';

// import { loading } from '@apollo/client'

// const  SignIn = () => {
//     const [mutate, loading, error, data] = useMutation(SIGN_IN)
//       if (loading) return <p>Loading...</p>;
//       if (error) return <p>Error :(</p>;
// } 
// export default SignIn;
// function AddTodo() {
//     let input;
//     const [adduser] = useMutation(SIGN_UP, {
//       update(cache, { data: { adduser } }) {
//         cache.modify({
//           fields: {
//             todos(existinguser = []) {
//               const newTodoRef = cache.writeFragment({
//                 data: adduser,
//                 fragment: gql`
//                   fragment NewTodo on Todo {
//                     id
//                     Username
//                     Password
//                   }
//                 `
//               });
//               return [...existinguser, newTodoRef];
//             }
//           }
//         });
//       }
//     });
  
//     return (
//       <div>
//         <form
//           onSubmit={e => {
//             e.preventDefault();
//             adduser({ variables: { type: input.value } });
//             input.value = "";
//           }}
//         >
//           <input
//             ref={node => {
//               input = node;
//             }}
//           />
//           <button type="submit">Register</button>
//         </form>
//       </div>
//     );
//   }

// function Todos() {
//     const { loading: queryLoading, error: queryError, data } = useQuery(
//         SIGN_UP,
//     );
  
//     const [
//       updateTodo,
//       { loading: mutationLoading, error: mutationError },
//     ] = useMutation(SIGN_UP);
  
//     if (queryLoading) return <p>Loading...</p>;
//     if (queryError) return <p>Error :(</p>;
  
//     return data.signup.map(({ id, Username, Password }) => {
//       let input;
  
//       return (
//         <div key={id}>
//           <p>{Username}</p>
//           <p>{Password}</p>
//           <form
//             onSubmit={e => {
//               e.preventDefault();
//               updateTodo({ variables: { id, Username: input.value } });
//               input.value = '';
//             }}
//           >
//             <input
//               ref={node => {
//                 input = node;
//               }}
//             />
//             <button type="submit">Sign UP</button>
//           </form>
//           {mutationLoading && <p>Loading...</p>}
//           {mutationError && <p>Error :( Please try again</p>}
//         </div>
//       );
//     });
//   }
 
//  export default Todos; 