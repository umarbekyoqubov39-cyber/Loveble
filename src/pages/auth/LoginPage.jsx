function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-sm p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900">Welcome Back</h1>

        <p className="text-gray-500 mt-2">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="name@example.com"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don't have an account?{" "}
          <span className="text-indigo-600 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
