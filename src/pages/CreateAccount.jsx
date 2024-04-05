import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function CreateAccount() {
    const { createUser } = useContext(AuthContext);
    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        createUser(email, password).then(result => {
            console.log(result.user);
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-1/2 m-auto p-4 md:p-8 bg-slate-400">
                <h1 className="text-center text-3xl font-semibold">Please create account</h1>
                <div>
                    <form onSubmit={handleCreateUser}>
                        <label htmlFor="name" className="block mb-5">Your Name
                            <input type="text" name="name" placeholder="Enter your name" className="input w-full" />
                        </label>
                        <label htmlFor="photo" className="block mb-5">Photo URL
                            <input type="text" name="photo" placeholder="Enter your photo" className="input w-full" />
                        </label>
                        <label htmlFor="email" className="block mb-5">Your Email
                            <input type="email" name="email" placeholder="Enter your email" className="input w-full" />
                        </label>
                        <label htmlFor="password" className="block mb-5">Your Password
                            <input type="password" name="password" placeholder="Enter your password" className="input w-full" />
                        </label>
                        <button className="btn w-full btn-accent">Create Account</button>
                        <p className="text-center p-4">Already Have An Account? <Link to="/user/login" className="font-bold text-blue-800">Login</Link></p>

                    </form>
                </div>
            </div>

        </div>
    )
}
