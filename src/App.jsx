
import { BrowserRouter, Outlet, Route, Routes, useParams, Navigate, } from 'react-router-dom'
import PageNotFound from "./page/PageNotFound"
import AppLayout from "./layout/AppLayout"
import Home from "./page/Home"
import { useState } from "react"

function Posts() {
  return (
    <>
    <h1>Posts</h1>
    <Outlet/>
    </>
  )
}

function Post() {

  let params = useParams();
  return (
    <h1>Post: {params.postId}</h1>
  )
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({error: null, user: {username:"", roles: []}})

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate to="home"/>}/>
            <Route path="home" element={<Home/>}/>  
            <Route path="about" element={<h1>About</h1>}/>
            <Route path="contact" element={<h1>Contact</h1>}/>
            <Route path="posts" element={<Posts/>}>
                <Route index element={<h1>New Posts</h1>}/>
                <Route path=":postId" element={<Post/>}/>
            </Route>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
