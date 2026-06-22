function AdminDashboard() {
  const totalStudents = 1240;
  const expectedMeals = 1098;
  const mealOffRequests = 142;
  const foodSaved = 87;

  const mealOffList = [
    { name: "Rahul", meal: "Lunch", date: "24 Jun", status: "Pending" },
    { name: "Aman", meal: "Dinner", date: "24 Jun", status: "Pending" },
    { name: "Priya", meal: "Breakfast", date: "25 Jun", status: "Approved" },
    { name: "Karan", meal: "Lunch", date: "25 Jun", status: "Approved" },
  ];

  const recentActivity = [
    "Rahul requested Lunch Off",
    "Aman requested Dinner Off",
    "Priya attendance marked",
    "Food waste updated for dinner",
  ];

  const todayMenu = {
    breakfast: "Poha + Tea",
    lunch: "Rice + Dal + Paneer",
    dinner: "Roti + Sabji",
  };

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 shadow-xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">MessOps</h1>
          <p className="text-slate-400 text-sm mt-2">Admin Portal</p>
        </div>

        <ul className="space-y-3">
          {[
            "Dashboard",
            "Meal Off Requests",
            "Attendance",
            "Analytics",
            "Reports",
            "Students",
          ].map((item) => (
            <li
              key={item}
              className="cursor-pointer rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <p className="text-slate-400 text-sm">Today's Status</p>
          <p className="text-2xl font-bold mt-1">Live</p>
          <p className="text-xs text-slate-500 mt-2">
            Attendance and requests updating
          </p>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-8 shadow-2xl border border-white/10 mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="mt-3 text-blue-100/80">
            Monitor attendance, manage meal-offs, and reduce food wastage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-slate-400 mb-2">Total Students</h3>
            <p className="text-4xl font-bold text-blue-400">{totalStudents}</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-slate-400 mb-2">Expected Meals</h3>
            <p className="text-4xl font-bold text-emerald-400">
              {expectedMeals}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-slate-400 mb-2">Meal Off Requests</h3>
            <p className="text-4xl font-bold text-amber-400">
              {mealOffRequests}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6">
            <h3 className="text-slate-400 mb-2">Food Saved</h3>
            <p className="text-4xl font-bold text-purple-400">{foodSaved} Kg</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Meal Off Requests</h2>
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-300">
                Pending Review
              </span>
            </div>

            <div className="space-y-3">
              {mealOffList.map((req) => (
                <div
                  key={`${req.name}-${req.date}-${req.meal}`}
                  className="grid grid-cols-4 items-center rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-4 gap-3"
                >
                  <div>
                    <p className="font-semibold">{req.name}</p>
                    <p className="text-xs text-slate-500">Student</p>
                  </div>

                  <div>
                    <p className="text-slate-300">{req.meal}</p>
                    <p className="text-xs text-slate-500">Meal</p>
                  </div>

                  <div>
                    <p className="text-slate-300">{req.date}</p>
                    <p className="text-xs text-slate-500">Date</p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        req.status === "Approved"
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "bg-amber-500/10 text-amber-300"
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Today's Menu</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-5">
                <p className="text-orange-300 font-semibold">Breakfast</p>
                <p className="text-slate-200 mt-1">{todayMenu.breakfast}</p>
              </div>

              <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5">
                <p className="text-emerald-300 font-semibold">Lunch</p>
                <p className="text-slate-200 mt-1">{todayMenu.lunch}</p>
              </div>

              <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5">
                <p className="text-purple-300 font-semibold">Dinner</p>
                <p className="text-slate-200 mt-1">{todayMenu.dinner}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>

            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div
                  key={activity}
                  className="rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-4 text-slate-300"
                >
                  {activity}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Quick Insights</h2>

            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
                <p className="text-slate-400 text-sm">Peak Waste Day</p>
                <p className="text-white mt-1 font-semibold">Monday Lunch</p>
              </div>

              <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
                <p className="text-slate-400 text-sm">Lowest Attendance</p>
                <p className="text-white mt-1 font-semibold">Friday Dinner</p>
              </div>

              <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
                <p className="text-slate-400 text-sm">Suggested Action</p>
                <p className="text-white mt-1 font-semibold">
                  Reduce lunch prep by 8% tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
