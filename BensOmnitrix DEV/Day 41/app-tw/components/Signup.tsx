"use client"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col justify-center px-10 md:px-20 lg:px-32 w-full md:w-1/2 bg-white">
        <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
        <p className="text-gray-600 mb-6">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a>
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="email"
              placeholder="harkirat@gmail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="123456"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <button onClick={() => {
            console.log("Hi there")
          }}
            type="submit"
            className="w-full bg-black text-white rounded-md py-2 font-medium hover:bg-gray-800 transition"
          >
            Sign in
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex items-center justify-center w-1/2 bg-gray-100 px-10">
        <div className="max-w-md">
          <p className="text-2xl font-semibold text-gray-900 mb-4">
            “The customer support I received was exceptional. The support team
            went above and beyond to address my concerns”
          </p>
          <div>
            <p className="font-semibold text-gray-900">Julies Winfield</p>
            <p className="text-sm text-gray-500">CEO | Acme corp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
