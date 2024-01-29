import { useState } from "react";
import API from "../../helper/constants.helper";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useToasts } from "react-toast-notifications";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const { addToast } = useToasts();
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
     
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await fetch(API.BASE_URL + API.SIGNIN, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username,
                    password,
                  }),
                });
                if (response.ok) {
                    const data = await response.json();
                    const { token } = data;
                    console.log('token is : ',token); 
                    localStorage.setItem('token',token);
                    addToast('Signin successful!', { appearance: 'success', autoDismiss: true });
                    history.push('/events');
                } else {
                  addToast('Invalid User!', { appearance: 'error', autoDismiss: true });
                  console.error('Signup failed:', response.statusText);
                }
              } catch (error) {
                addToast('Signin failed!', { appearance: 'error', autoDismiss: true });
                console.error('Error during signup:', error);
              } finally {
                setLoading(false);
              }
        } else {
          setErrors(validationErrors);
          setLoading(false);
        }
      };
    
    
      const validateForm = () => {
        const errors = {};
    
        // Validate email
        if (!username.trim()) {
          errors.username = 'Username is required';
        }
    
        // Validate password
        if (!password.trim()) {
          errors.password = 'Password is required';
        } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters';
        }
    
        return errors;
      };

    return (
        <>
            <section className="bg-white p-8 rounded-md shadow-md w-96 mx-auto">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Login</h1>
                <form className="space-y-4">
                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)} />
                         {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>} 
                    </div>

                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"
                        value={password}
                         onChange={(e) => setPassword(e.target.value)} />
                         {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>} 
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

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none relative"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        {loading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-400 border-r-2 border-b-2 border-blue-700"></div>
                        </div>
                        )}
                        {loading ? 'Signing...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </section>
        </>
    );
  }
  
  export default Login;