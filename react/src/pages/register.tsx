
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="relative min-h-screen bg-[#F5F5DC]/15">

            <div className="absolute left-25 top-0 min-h-screen border-l border-black/10"></div>
            <div className="absolute right-25 top-0 min-h-screen border-r border-black/10"></div>
            <div className="absolute top-20 w-full border-t border-black/10"></div>
            <div className="absolute bottom-0 w-full border-b border-black/10"></div>

            <div className="px-27 py-12">
                <header>
                    <Link to="/login" className="inline-block font-bold tracking-wider text-black hover:text-black/80">
                        RETANT
                    </Link>
                </header>

                <div className="mt-16 mx-auto max-w-sm">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Create an account
                    </h2>

                    <p className="mt-2 text-sm text-black/50">
                        Sign up to get started
                    </p>

                    <form className="mt-8 space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                required
                                className="w-full border border-black/15 bg-transparent px-4 py-3 outline-none focus:border-black transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full border border-black/15 bg-transparent px-4 py-3 outline-none focus:border-black transition"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                    required
                                    className="w-full border border-black/15 bg-transparent px-4 py-3 pr-12 outline-none focus:border-black transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Confirm password
                            </label>

                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm your password"
                                    required
                                    className="w-full border border-black/15 bg-transparent px-4 py-3 pr-12 outline-none focus:border-black transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black"
                                >
                                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black py-3 text-white text-sm font-medium hover:bg-black/80 transition"
                        >
                            Create account
                        </button>
                    </form>

                    <p className="mt-7 text-center text-sm text-black/60">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-black hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
