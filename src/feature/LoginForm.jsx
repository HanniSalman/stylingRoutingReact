import React, { useEffect } from 'react'

export default function LoginForm({isAuthenticated, setIsAuthenticated, setUser, error}) {
    const handleSubmit = async (e) => {
        
    }
    useEffect(() => {
        if (!isAuthenticated){
            clearLocalStorage();
        }

        if (isAuthenticated) navigate("/home", {replace: true});
    }, [isAuthenticated, navigate])

  return (
    <div>
      
    </div>
  )
}
