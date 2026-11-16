
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative min-h-screen bg-[#F5F5DC]/15">

            <div className="absolute left-25 top-0 min-h-screen border-l border-black/10"></div>
            <div className="absolute right-25 top-0 min-h-screen border-r border-black/10"></div>
            <div className="absolute top-20 w-full border-t border-black/10"></div>
            <div className="absolute bottom-0 w-full border-b border-black/10"></div>

            <div className="px-27 py-12">
                <header>
                    <h1 className="font-bold tracking-wider">RETANT</h1>
                </header>

                <div className="mt-24 mx-auto max-w-sm">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Welcome back
                    </h2>

                    <p className="mt-2 text-sm text-black/50">
                        Sign in to your account
                    </p>

                    <form className="mt-10 space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
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
                                    placeholder="Enter your password"
                                    className="w-full border border-black/15 bg-transparent px-4 py-3 pr-12 outline-none focus:border-black transition"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black py-3 text-white text-sm font-medium hover:bg-black/80 transition"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-black/60">
                        Don't have an account?{" "}
                        <a href="/signup" className="font-semibold text-black hover:underline">
                            Create account
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
