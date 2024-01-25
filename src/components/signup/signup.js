function Signup() {
    return (
        <section className="bg-white p-8 rounded-md shadow-md w-96 mx-auto opacity-90">
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
            <form className="space-y-4">
                <div>
                    <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                <div>
                    <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                <div>
                    <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"/>
                </div>

                <div>
                    <label for="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password" className="mt-1 p-2 w-full border rounded-md"/>
                </div>

                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Sign Up</button>
            </form>
        </div>
    </section>
    );
  }
  
  export default Signup;