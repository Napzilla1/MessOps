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
    {
      date: "19 Jun 2026",
      meal: "Lunch",
    },
    {
      date: "20 Jun 2026",
      meal: "Dinner",
    },
    {
      date: "23 Jun 2026",
      meal: "Breakfast",
    },
  ];

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white p-6 shadow-xl">
        <h1 className="text-3xl font-bold mb-10">MessOps</h1>

        <ul className="space-y-5">
          <li className="cursor-pointer hover:text-blue-400 transition">
            Dashboard
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Today's Menu
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Meal Off
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            QR Pass
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            History
          </li>

          <li className="cursor-pointer hover:text-blue-400 transition">
            Profile
          </li>
        </ul>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-lg mb-8">
          <h1 className="text-4xl font-bold">Welcome Back, Himanshu 👋</h1>

          <p className="mt-2 text-blue-100">
            Smart Hostel Mess Management Platform
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-gray-500 mb-2">Meals Consumed</h3>

            <p className="text-4xl font-bold text-blue-600">{mealsConsumed}</p>

            <p className="text-gray-400">Out of {totalMeals} meals</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-gray-500 mb-2">Meal Off Used</h3>

            <p className="text-4xl font-bold text-red-500">{mealOffUsed}</p>

            <p className="text-gray-400">
              Remaining {mealOffLimit - mealOffUsed}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition">
            <h3 className="text-gray-500 mb-2">Food Saved</h3>

            <p className="text-4xl font-bold text-green-500">{foodSaved} Kg</p>

            <p className="text-gray-400">This Month</p>
          </div>
        </div>

        {/* Today's Menu */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Today's Menu</h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-orange-50 rounded-xl p-5">
              <h3 className="font-bold text-lg">Breakfast</h3>

              <p className="text-gray-600">{todayMenu.breakfast}</p>
            </div>

            <div className="bg-green-50 rounded-xl p-5">
              <h3 className="font-bold text-lg">Lunch</h3>

              <p className="text-gray-600">{todayMenu.lunch}</p>
            </div>

            <div className="bg-purple-50 rounded-xl p-5">
              <h3 className="font-bold text-lg">Dinner</h3>

              <p className="text-gray-600">{todayMenu.dinner}</p>
            </div>
          </div>
        </div>

        {/* Status + Upcoming Offs */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Today's Status</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Breakfast</span>
                <span className="text-green-600 font-semibold">
                  {todayStatus.breakfast}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Lunch</span>
                <span className="text-red-500 font-semibold">
                  {todayStatus.lunch}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Dinner</span>
                <span className="text-green-600 font-semibold">
                  {todayStatus.dinner}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Meal Offs</h2>

            <div className="space-y-3">
              {upcomingMealOffs.length === 0 ? (
                <p className="text-gray-500">No Upcoming Meal Offs</p>
              ) : (
                upcomingMealOffs.map((off, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>{off.date}</span>

                    <span className="font-semibold text-red-500">
                      {off.meal}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
