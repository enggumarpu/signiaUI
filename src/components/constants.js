import { gql, useMutation } from '@apollo/client'


export const GRAPHQL_API = "http://15.223.62.161:3030/graphql";
export const GET_ALL_EVENTS = gql`
query {
    getAllEvents {
    id, 
    Title
    Discription 
    }
  }
`;

export const GET_ALL_BLOGS = gql`
query {
    getAllBlogs {
        id,    
        Title,
        Message,
        CreatedDate
    }
  }
`;
export const GET_ALL_DEMO_VIDEOS = gql`
query {
    getAllDemoVideos {
      id,
      VideoUrl,
      Title,
      TotalViews,
      Description
    }
  }
`;
export const GET_ALL_APIS = gql`
query {
  getAllWso2Apis{
    id,
    name,
    description
  }
  }
`;
// export const GET_ALL_USER = gql`
// query {
//     getAllUser {
//         id,    
//         Username,
//         Password
//     }
//   }
// `;

export const SIGN_IN = gql `
mutation signIn {
  signIn(usersInput:{
    Username:"ammar.ahmed"
   Password:"Test@1234"
 }) {accessToken}
      
}`;
      
// }`;
export const BLOGS_TODOS = gql `
mutation createBlog($createBlogInput: CreateBlogInput!) 
  {
    createBlog(createBlogInput: $createBlogInput){
        id
    } 
}`;