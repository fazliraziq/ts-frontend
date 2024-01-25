function Login() {
    return (
        <section className="bg-white p-8 rounded-md shadow-md w-96 mx-auto">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Login</h1>
                <form className="space-y-4">
                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md"/>
                    </div>

                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"/>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"/>
                            <label for="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>

                        <div>
                            <a href="#d" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                        </div>
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Login</button>
                </form>
            </div>
        </section>
    );
  }
  
  export default Login;