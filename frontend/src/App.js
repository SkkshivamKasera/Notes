import { Fragment, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home.jsx'
import Login from './components/auth/Login.jsx'
import SignUp from './components/auth/SignUp'
import LoadingBar from 'react-top-loading-bar'
import ForGotPassword from './components/auth/ForGotPassword'
import ResetPassword from './components/auth/ResetPassword.jsx'
import Footer from './components/footer/Footer';
import Alert from './components/alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import Notes from './components/notes/Notes';
import { loaduser } from './actions/userAction';
import Loader from './components/loading/Loader.jsx'
import CreateCourse from './components/course/CreateCourse';
import Courses from './components/course/Courses.jsx';
import { getAllCourses, getAllNotes } from './actions/courseAction';
import MenuDiv from './components/header/MenuDiv';
import CourseDetail from './components/course/CourseDetail.jsx'
import CreateNote from './components/notes/CreateNote';
import MyProfile from './components/profile/MyProfile';
import MyCourses from './components/profile/MyCourses';
import NotFound from './components/notfound/NotFound.jsx';
import 'react-toastify/dist/ReactToastify.css';
import UpdateAvatar from './components/profile/UpdateAvatar';

function App() {
  const [progress, setProgress] = useState(0)
  const [loadUser, setLoadUser] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loadCourses, setLoadCourses] = useState(false)
  const [loadNotes, setLoadNotes] = useState(false)
  const [alert, setAlert] = useState({type: null, message: null})
  const dispatch = useDispatch()
  const { loading, error, message, isAuthenticated, user } = useSelector(state=>state.user)
  const { loading: courseLoading, error: courseError, message: courseMessage } = useSelector(state=>state.course)
  const { loading: commonLoading, error: commonError, message: commonMessage } = useSelector(state=>state.common)
  const { loading: noteLoading, error: noteError } = useSelector(state=>state.note)
  const { loading: courseInfoLoading } = useSelector(state =>state.courseInfo)

  useEffect(()=>{
    if(progress === 100){
      setProgress(0)
    }
  },[progress])

  const showAlert = (type, message) => {
    setAlert({type, message})
    setTimeout(() => {
      setAlert({type: null, message: null})
    }, 2000)
  }

  useEffect(() => {
    if (error) {
      if (error.includes("⚠️")) {
        showAlert("warning", error);
        dispatch({ type: "ClearError" });
      } else {
        if(!error.includes("Please Login")) showAlert("danger", error);
        dispatch({ type: "ClearError" });
      }
    }
    if (message) {
      showAlert("success", message);
      dispatch({ type: "ClearMessage" });
      setLoadUser(false)
    }
    if (courseError) {
      if (courseError.includes("⚠️")) {
        showAlert("warning", courseError);
        dispatch({ type: "ClearError" });
      } else {
        showAlert("danger", courseError);
        dispatch({ type: "ClearError" });
      }
    }
    if (courseMessage) {
      showAlert("success", courseMessage);
      dispatch({ type: "ClearMessage" });
    }
    if (commonError) {
      if (commonError.includes("⚠️")) {
        showAlert("warning", commonError);
        dispatch({ type: "ClearError" });
      } else {
        showAlert("danger", commonError);
        dispatch({ type: "ClearError" });
      }
    }
    if (commonMessage) {
      showAlert("success", commonMessage);
      dispatch({ type: "ClearMessage" });
    }
    if (noteError) {
      if (noteError.includes("⚠️")) {
        showAlert("warning", noteError);
        dispatch({ type: "ClearError" });
      } else {
        showAlert("danger", noteError);
        dispatch({ type: "ClearError" });
      }
    }
  }, [dispatch, error, message, courseError, courseMessage, commonError, commonMessage, noteError]);

  if(!loadUser){
    dispatch(loaduser())
    setLoadUser(true)
  }

  if(!loadCourses){
    setProgress(20)
    dispatch(getAllCourses())
    setProgress(50)
    setLoadCourses(true)
    setProgress(100)
  }

  if(!loadNotes){
    setProgress(20)
    dispatch(getAllNotes())
    setProgress(50)
    setLoadNotes(true)
    setProgress(100)
  }

  return (
    loading || courseLoading || commonLoading || noteLoading || courseInfoLoading ? 
    <div>
      <LoadingBar color='blueviolet' height={4} progress={progress} />
      <Loader/>
    </div> :
    <Router>
    <Fragment>
      <LoadingBar color='blueviolet' height={4} progress={progress} />
      <MenuDiv setProgress={setProgress} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Header setProgress={setProgress} isAuthenticated={isAuthenticated} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Alert type={alert.type} message={alert.message}/>
      <Routes>
        <Route exact path='/' element={<Home setProgress={setProgress}/>}/>
        <Route exact path='/login' element={!isAuthenticated ? <Login setLoadUser={setLoadUser} showAlert={showAlert} setProgress={setProgress}/> : <Home/>}/>
        <Route exact path='/signup' element={!isAuthenticated ? <SignUp setLoadUser={setLoadUser} showAlert={showAlert} setProgress={setProgress}/> : <Home/>}/>
        <Route exact path='/forgotpassword' element={<ForGotPassword setProgress={setProgress} setLoadUser={setLoadUser}/>}/>
        <Route exact path='/password/reset/:token' element={<ResetPassword setProgress={setProgress}/>}/>
        <Route exact path='/notes' element={<Notes setLoadCourses={setLoadCourses} setLoadUser={setLoadUser}/>}/>
        <Route exact path='/courses' element={<Courses setLoadCourses={setLoadCourses} setLoadUser={setLoadUser} setProgress={setProgress}/>}/>
        <Route exact path='/admin/new' element={user ? user.role === "admin" && <CreateCourse setProgress={setProgress} setLoadCourses={setLoadCourses}/> : <Home/>}/>
        <Route exact path='/admin/note/new' element={user ? user.role === "admin" && <CreateNote showAlert={showAlert} setProgress={setProgress} setLoadNotes={setLoadNotes}/> : <Home/>}/>
        <Route exact path='/course/:id' element={<CourseDetail user={user} setProgress={setProgress} setLoadCourses={setLoadCourses}/>}/>
        <Route exact path='/profile' element={<MyProfile setLoadUser={setLoadUser}/>}/>
        <Route exact path='/mycourses' element={<MyCourses setProgress={setProgress}/>}/>
        <Route exact path='/me/update/avatar' element={<UpdateAvatar setProgress={setProgress} setLoadUser={setLoadUser}/>}/>
        <Route exact path='/*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </Fragment>
  </Router>
  );
}

export default App;
