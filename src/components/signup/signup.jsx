import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import API from "../../helper/constants.helper";
import { useToasts } from "react-toast-notifications";

function Signup() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { addToast } = useToasts();

  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
 
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
        try {
            const response = await fetch(API.BASE_URL + API.SIGNUP, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                username,
                email,
                password,
                confirmPassword,
                contact,
              }),
            });
      
            if (response.ok) {
              addToast('Signup successful! Redirecting to Login.', { appearance: 'success', autoDismiss: true });
              history.push('/login');
            } else {
              addToast('Signup failed!.', { appearance: 'error', autoDismiss: true });
              console.error('Signup failed:', response.statusText);
            }
          } catch (error) {
            addToast('Signup failed!.', { appearance: 'error', autoDismiss: true });
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

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    // Validate confirmPassword
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if(!isValidPhoneNumber(contact)){
        errors.contact = "Invalid contact detail - 10 digits";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    // Example regex for a generic phone number (adjust as needed)
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

    return (
        <>
            <section className="bg-white p-8 rounded-md shadow-md w-96 mx-auto opacity-90">
            <div className="container mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
                <form className="space-y-4">
                    <div>
                        <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <label for="username" className="block text-sm font-medium text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>

                    <div>
                        <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>

                    <div>
                        <label for="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input type="password" id="confirm-password" name="confirm-password" className="mt-1 p-2 w-full border rounded-md"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}/>
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>

                    <div>
                        <label for="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                        <input type="text" id="contact" name="contact" className="mt-1 p-2 w-full border rounded-md" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}/>
                        {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
                    </div>

                    {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Sign Up</button> */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none relative"
                        onClick={handleSignup}
                        disabled={loading}
                    >
                        {loading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-400 border-r-2 border-b-2 border-blue-700"></div>
                        </div>
                        )}
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </section>
        </>
        
    );
  }
  
  export default Signup;