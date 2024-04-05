import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Login() {
    const { loginUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get("email");
        const password = form.get("password");
        loginUser(email, password).then((result) => {
            console.log(result.user);
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-1/2 m-auto p-4 md:p-8 bg-slate-400">
                <h1 className="text-center text-3xl font-semibold">Please Login</h1>
                <div>
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email" className="block mb-5">Your Email
                            <input type="email" name="email" placeholder="Enter your email" className="input w-full" />
                        </label>
                        <label htmlFor="password" className="block mb-5">Your Password
                            <input type="password" name="password" placeholder="Enter your password" className="input w-full" />
                        </label>
                        <button className="btn w-full btn-accent">Login</button>
                        <p className="text-center p-4">Don&apos;t Have An Account? <Link to="/user/create-account" className="font-bold text-blue-800">Create Account</Link></p>

                    </form>
                </div>
            </div>

        </div>
    )
}
