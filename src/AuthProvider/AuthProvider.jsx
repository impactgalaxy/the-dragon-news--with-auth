import { createContext } from "react"

const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const authInfo = { name: "palash" };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
