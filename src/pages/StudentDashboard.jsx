function StudentDashboard() {
  const mealsConsumed = 62;
  const totalMeals = 90;

  const mealOffUsed = 8;
  const mealOffLimit = 15;

  const foodSaved = 16;

  const todayMenu = {
    breakfast: "Poha + Tea",
    lunch: "Rice + Dal + Paneer",
    dinner: "Roti + Sabji",
  };

  const todayStatus = {
    breakfast: "Active",
    lunch: "Meal Off",
    dinner: "Active",
  };

  const upcomingMealOffs = [
    { date: "19 Jun 2026", meal: "Lunch" },
    { date: "20 Jun 2026", meal: "Dinner" },
    { date: "23 Jun 2026", meal: "Breakfast" },
  ];

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      <div className="w-72 bg-slate-900 border-r border-slate-800 p-6 shadow-xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold">MessOps</h1>
          <p className="text-slate-400 text-sm mt-2">Student Portal</p>
        </div>

        <ul className="space-y-3">
          {[
            "Dashboard",
            "Today's Menu",
            "Meal Off",
            "QR Pass",
            "History",
            "Profile",
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
          <p className="text-slate-400 text-sm">Meal Off Limit</p>
          <p className="text-2xl font-bold mt-1">
            {mealOffUsed}/{mealOffLimit}
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Remaining {mealOffLimit - mealOffUsed}
          </p>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-auto">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 p-8 shadow-2xl border border-white/10 mb-8">
          <h1 className="text-4xl font-bold">Welcome Back, Himanshu 👋</h1>
          <p className="mt-3 text-blue-100/80">
            Track your meals, meal-offs, and monthly savings in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
            <h3 className="text-slate-400 mb-2">Meals Consumed</h3>
            <p className="text-4xl font-bold text-blue-400">{mealsConsumed}</p>
            <p className="text-slate-500 mt-2">Out of {totalMeals} meals</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
            <h3 className="text-slate-400 mb-2">Meal Off Used</h3>
            <p className="text-4xl font-bold text-rose-400">{mealOffUsed}</p>
            <p className="text-slate-500 mt-2">
              Remaining {mealOffLimit - mealOffUsed}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-6 hover:-translate-y-1 transition">
            <h3 className="text-slate-400 mb-2">Food Saved</h3>
            <p className="text-4xl font-bold text-emerald-400">
              {foodSaved} Kg
            </p>
            <p className="text-slate-500 mt-2">Approximate this month</p>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Today's Menu</h2>
            <span className="text-sm rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-blue-300">
              Live Menu
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-orange-500/10 border border-orange-500/20 p-5">
              <h3 className="font-semibold text-orange-300 text-lg mb-2">
                Breakfast
              </h3>
              <p className="text-slate-200">{todayMenu.breakfast}</p>
            </div>

            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5">
              <h3 className="font-semibold text-emerald-300 text-lg mb-2">
                Lunch
              </h3>
              <p className="text-slate-200">{todayMenu.lunch}</p>
            </div>

            <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5">
              <h3 className="font-semibold text-purple-300 text-lg mb-2">
                Dinner
              </h3>
              <p className="text-slate-200">{todayMenu.dinner}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Today's Meal Status</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-4">
                <span>Breakfast</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  {todayStatus.breakfast}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-4">
                <span>Lunch</span>
                <span className="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-300">
                  {todayStatus.lunch}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-4">
                <span>Dinner</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  {todayStatus.dinner}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Upcoming Meal Offs</h2>

            <div className="space-y-3">
              {upcomingMealOffs.length === 0 ? (
                <p className="text-slate-400">No upcoming meal offs.</p>
              ) : (
                upcomingMealOffs.map((off) => (
                  <div
                    key={`${off.date}-${off.meal}`}
                    className="flex items-center justify-between rounded-2xl bg-slate-950/70 border border-slate-800 px-4 py-4"
                  >
                    <span className="text-slate-300">{off.date}</span>
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold text-blue-300">
                      {off.meal}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Student Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-slate-300">
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <p className="text-slate-500 text-sm">Name</p>
              <p className="mt-1 font-semibold">Himanshu Kumar</p>
            </div>

            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <p className="text-slate-500 text-sm">Hostel</p>
              <p className="mt-1 font-semibold">Hostel A</p>
            </div>

            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <p className="text-slate-500 text-sm">Room</p>
              <p className="mt-1 font-semibold">101</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
