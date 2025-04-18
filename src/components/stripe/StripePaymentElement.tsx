
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51RExra4PegiUJKIXRv34bRl9ozED3bLPiVT0fYgRf3L3MXId5n3wkdYCWYQeD0wGEoUJRrZIdpmEvxneTPDoNarE00yni6u9O6');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't loaded yet
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: window.location.origin + '/stripe-webflow-kit',
      },
      redirect: 'if_required',
    });

    if (error) {
      setErrorMessage(error.message || 'An unexpected error occurred.');
      setLoading(false);
    } else {
      // Show success message since no redirect happened
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-4 text-green-600">Payment Successful!</h3>
        <p className="mb-4 text-gray-700">Your test payment was processed successfully.</p>
        <Button 
          onClick={() => window.location.reload()}
          variant="outline"
          className="mt-2"
        >
          Try Another Payment
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      
      {errorMessage && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md text-sm">
          {errorMessage}
        </div>
      )}
      
      <div className="text-xs text-gray-500 mb-4">
        <p>💡 This is a test mode demo. No real charges will be made.</p>
        <p>Try using test card: 4242 4242 4242 4242 | Any future date | Any CVC</p>
      </div>
      
      <Button 
        type="submit" 
        disabled={!stripe || loading} 
        className="w-full"
      >
        {loading ? 'Processing...' : 'Pay $97'}
      </Button>
    </form>
  );
};

const StripePaymentElement = () => {
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    // Fetch client secret from your endpoint
    const fetchClientSecret = async () => {
      try {
        const response = await fetch('https://ihohzzo3t6fqk3h4ka3kw5l6ci0mzntd.lambda-url.us-east-2.on.aws/');
        const data = await response.json();
        
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          console.error('No client secret returned from the server');
        }
      } catch (error) {
        console.error('Error fetching client secret:', error);
      }
    };

    fetchClientSecret();
  }, []);

  return (
    <div>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Try Our Payment Flow</CardTitle>
              <CardDescription>
                Test the exact checkout experience your customers will have.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CheckoutForm />
            </CardContent>
          </Card>
        </Elements>
      ) : (
        <Card className="max-w-md mx-auto">
          <CardContent className="py-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full border-4 border-t-transparent border-gray-200 animate-spin mb-4"></div>
              <p className="text-gray-600">Loading payment form...</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default StripePaymentElement;
