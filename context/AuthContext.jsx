import { createContext, useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

        const [token, setToken] = useState(null);

    const login =(accessToken)=>{
        setToken(accessToken);
        localStorage.setItem('token', accessToken)

    };
  return (
    <div>
      <AuthContext.Provider value={{token,login,isAuthenticated: !!token}}> {children} </AuthContext.Provider>
    </div>
  )
}

export default AuthContext
