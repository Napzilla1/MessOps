import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaLeaf, FaUsers, FaUtensils } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!password.trim()) {
      setError("Please enter your password.");
      return;
    }

    setError("");

    if (role === "student") {
      navigate("/student");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <div className="hidden lg:flex w-1/2 flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950 pointer-events-none" />

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Smart Hostel Mess Management Platform
          </div>

          <h1 className="text-6xl font-bold leading-tight mb-4">MessOps</h1>

          <p className="text-xl text-slate-400 mb-10 max-w-lg">
            Reduce food waste, track meal-offs, and manage mess operations with
            a clean data-driven dashboard.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <FaLeaf className="text-green-400" size={28} />
              <div>
                <h3 className="text-white font-semibold">Reduce Food Waste</h3>
                <p className="text-slate-400 text-sm">
                  Meal-off requests help predict attendance better.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <FaUsers className="text-blue-400" size={28} />
              <div>
                <h3 className="text-white font-semibold">Student Management</h3>
                <p className="text-slate-400 text-sm">
                  Track meal-offs, history, and user activity.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
              <FaUtensils className="text-orange-400" size={28} />
              <div>
                <h3 className="text-white font-semibold">
                  Smart Meal Planning
                </h3>
                <p className="text-slate-400 text-sm">
                  Better forecasting for mess operations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-12">
            <div className="bg-slate-900/80 rounded-2xl p-5 text-center border border-slate-800">
              <h2 className="text-3xl font-bold text-blue-400">1200+</h2>
              <p className="text-slate-400 text-sm mt-1">Students</p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-5 text-center border border-slate-800">
              <h2 className="text-3xl font-bold text-emerald-400">25%</h2>
              <p className="text-slate-400 text-sm mt-1">Less Waste</p>
            </div>

            <div className="bg-slate-900/80 rounded-2xl p-5 text-center border border-slate-800">
              <h2 className="text-3xl font-bold text-purple-400">24/7</h2>
              <p className="text-slate-400 text-sm mt-1">Monitoring</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold">MessOps</h1>
            <p className="text-slate-400 mt-2">
              Smart Hostel Mess Management Platform
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
              <p className="text-slate-400 mt-2">Login to continue</p>
            </div>

            {error && (
              <div className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <div className="mb-5">
              <label className="block text-slate-300 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full p-4 bg-slate-800 text-white rounded-xl border border-slate-700 outline-none focus:border-blue-500 transition"
              />
            </div>

            <div className="mb-5">
              <label className="block text-slate-300 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full p-4 pr-12 bg-slate-800 text-white rounded-xl border border-slate-700 outline-none focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-slate-300 mb-2">Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-4 bg-slate-800 text-white rounded-xl border border-slate-700 outline-none focus:border-blue-500 transition"
              >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              Login
            </button>

            <p className="text-center text-slate-500 mt-6 text-sm">
              Reduce Waste • Improve Efficiency • Smart Analytics
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
