import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils, FaLeaf, FaUsers, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "") {
      alert("Please Enter Email");
      return;
    }

    if (password === "") {
      alert("Please Enter Password");
      return;
    }

    if (role === "student") {
      navigate("/student");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Left Section */}

      <div className="hidden lg:flex w-1/2 flex-col justify-center px-16">
        <h1 className="text-6xl font-bold text-white mb-4">MessOps</h1>

        <p className="text-xl text-slate-400 mb-10">
          Smart Hostel Mess Management Platform
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-green-500 transition">
            <FaLeaf size={30} className="text-green-400" />

            <div>
              <h3 className="text-white font-semibold">Reduce Food Waste</h3>

              <p className="text-slate-400">
                Predict attendance using meal off requests
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-blue-500 transition">
            <FaUsers size={30} className="text-blue-400" />

            <div>
              <h3 className="text-white font-semibold">Student Management</h3>

              <p className="text-slate-400">
                Track attendance and meal analytics
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800 hover:border-orange-500 transition">
            <FaUtensils size={30} className="text-orange-400" />

            <div>
              <h3 className="text-white font-semibold">Smart Meal Planning</h3>

              <p className="text-slate-400">
                Better forecasting for mess operations
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="bg-slate-900 rounded-2xl p-5 text-center">
            <h2 className="text-3xl font-bold text-blue-400">1200+</h2>

            <p className="text-slate-400">Students</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-5 text-center">
            <h2 className="text-3xl font-bold text-green-400">25%</h2>

            <p className="text-slate-400">Less Waste</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-5 text-center">
            <h2 className="text-3xl font-bold text-purple-400">24/7</h2>

            <p className="text-slate-400">Monitoring</p>
          </div>
        </div>
      </div>

      {/* Right Section */}

      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>

            <p className="text-slate-400 mt-2">Login to continue</p>
          </div>

          <div className="mb-5">
            <label className="block text-slate-300 mb-2">Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full p-4 bg-slate-800 text-white rounded-xl border border-slate-700 focus:border-blue-500 outline-none"
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
                className="w-full p-4 bg-slate-800 text-white rounded-xl border border-slate-700 focus:border-blue-500 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
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
              className="w-full p-4 bg-slate-800 text-white rounded-xl border border-slate-700 focus:border-blue-500 outline-none"
            >
              <option value="student">Student</option>

              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-4 rounded-xl transition duration-300 hover:scale-105"
          >
            Login
          </button>

          <p className="text-center text-slate-500 mt-6 text-sm">
            Reduce Waste • Improve Efficiency • Smart Analytics
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
