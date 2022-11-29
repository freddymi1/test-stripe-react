import logo from './logo.svg';
import './App.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';

const stripePromise = loadStripe('pk_test_oKhSR5nslBRnBZpjO6KuzZeX');
const CLIENT_SECRET = "pi_3LvhqS2VYugoKSBz1ME5Eaet_secret_KP44cLHNz403i4qjkMox529Ye"
function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: CLIENT_SECRET,
  };
  
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default App;
