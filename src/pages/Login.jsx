function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-600">MessOps</h1>

          <p className="text-gray-500 mt-3">
            Smart Hostel Mess Management System
          </p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Institute Email"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="w-full border border-gray-300 p-3 rounded-xl">
            <option>Student</option>
            <option>Mess Manager</option>
            <option>Hostel Admin</option>
          </select>

          <button className="w-full bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          Reduce Food Waste • Improve Planning • Smart Forecasting
        </div>
      </div>
    </div>
  );
}

export default Login;
