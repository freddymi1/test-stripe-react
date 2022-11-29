import { PaymentElement } from '@stripe/react-stripe-js'
import React from 'react'

export default function CheckoutForm() {
  return (
    <div>
      <form>
        <PaymentElement />
        <button>Submit</button>
        </form>
    </div>
  )
}
