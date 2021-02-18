import React, { Suspense, lazy } from 'react';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';
import history from './utils/history';
import AuthRoute from './AuthRoute';

const Login = lazy(() => import('./components/login/Login')) 
const AdminLogin = lazy(() => import('./components/login/AdminLogin'))
const AdminLanding = lazy(() => import('./components/landing/AdminLanding'))
const Community = lazy(() => import('./components/Community'))
const EditProfile = lazy(() => import('./components/EditProfile'))
const ProfileUpdate = lazy(() => import('./components/ProfileUpdate'))
const mutation = lazy(() => import('./components/mutation'))
const DemoVideos = lazy(() => import('./components/DemoVideos'))
const AddBlogDocument = lazy(() => import('./components/blog/AddBlogDocument'))
const DevBlogs = lazy(() => import('./components/blog/DevBlogs'))
const AddYourBlog = lazy(() => import('./components/blog/AddYourBlog'))
const ApiGuide = lazy(() => import('./components/apis/ApiGuide'))
const SearchApi = lazy(() => import('./components/apis/SearchApi'))
const Publish = lazy(() => import('./components/apis/Publish'))
const NewLanding = lazy(() => import('./components/landing/NewLanding'));
const Support = lazy(() => import('./components/support/Support'));
const Events = lazy(() => import('./components/events/Events'));
const CreateYourEvents = lazy(() => import('./components/events/CreateYourEvents'));
const UpComingEvent = lazy(() => import('./components/events/UpComingEvent'));
const Hackathon = lazy(() => import('./components/hackathon/Hackathon'));
const RegistrationCard = lazy(() => import('./components/common/RegistrationCard/RegistrationCard'));
const Signup = lazy(() => import('./components/signup/Signup'));


const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: '/editprofile',
    component: EditProfile,
  },
  {
    path: '/profileupdate',
    component: ProfileUpdate,
  },
  {
    path: '/mutation',
    component: mutation,
  },
  {
    path: '/adminlanding',
    component: AdminLanding,
  },
  {
    path: '/adminlogin',
    component: AdminLogin,
  },
  {
    path: '/community',
    component: Community,
  },
  {
    path: '/apiguide',
    component: ApiGuide,
  },
  {
    path: '/searchapi',
    component: SearchApi,
  },
  {
    path: '/publish',
    component: Publish,
  },
  {
    path: '/demovideos',
    component: DemoVideos,
  },
  {
    path: '/addblogdocument',
    component: AddBlogDocument,
  },
  {
    path: '/devblogs',
    component: DevBlogs,
  },
  {
    path: '/addyourblog',
    component: AddYourBlog,
  },
  {
    path: '/newlanding',
    component: NewLanding,
  },
  {
    path: '/support',
    component: Support,
  },
  {
    path: '/events',
    component: Events,
  },
  {
    path: '/createyourevents',
    component: CreateYourEvents,
  },
  {
    path: '/upcomingevent',
    component: UpComingEvent,
  },
  {
    path: '/hackathon',
    component: Hackathon,
  },
  {
    path: '/regis',
    component: RegistrationCard,
  },
  {
    path: '/signup',
    component: Signup,
  },
];

const AppRouter = () => {
  return (
    <Router history={history}>
      {/* <Switch> */}
      {/* <Redirect from="/" to="/login" exact /> */}
       {/* <Route exact path="/" component={Login} />  */}
      
      {/* <Header /> */}
      <Suspense fallback={<div className="lazy-loading">Loading...</div>}>
      {/* <Route
            exact
            path="/"
            render={() => {
              return (
                <Redirect to="/" />
              )
            }}
          /> */}
          {/* {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))} */}
              <Switch>
                <Route exact path="/" component={Login}/>

                {/*Auth routes*/}
                        <AuthRoute path="/editprofile" component={EditProfile} />
                        <AuthRoute path="/searchapi" component={SearchApi} />
                        <AuthRoute path="/profileupdate" component={ProfileUpdate} />
                        <AuthRoute path="/mutation" component={mutation} />
                        <AuthRoute path="/adminlanding" component={AdminLanding} />
                        <AuthRoute path="/community" component={Community} />
                        <AuthRoute path="/publish" component={Publish} />
                        <AuthRoute path="/demovideos" component={DemoVideos} />
                        <AuthRoute path="/addblogdocument" component={AddBlogDocument} />
                        <AuthRoute path="/devblogs" component={DevBlogs} />
                        <AuthRoute path="/addyourblog" component={AddYourBlog} />
                        <AuthRoute path="/support" component={Support} />
                        <AuthRoute path="/events" component={Events} />
                        <AuthRoute path="/createyourevents" component={CreateYourEvents} />
                        <AuthRoute path="/upcomingevent" component={UpComingEvent} />
                        <AuthRoute path="/hackathon" component={Hackathon} />
                        <AuthRoute path="/regis" component={RegistrationCard} />
                        <AuthRoute path="/apiguide" component={ApiGuide} />
                        <AuthRoute path="/createyourevents" component={CreateYourEvents} />


                        {/*Public Routes*/}

                        <Route path="/newlanding" component={NewLanding} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/adminlogin" component={AdminLogin} />

        
                </Switch>
      </Suspense>
      <Footer />
      
      {/* </Switch> */}
    </Router>
  );
};

export default AppRouter;
