import { useState } from 'react';

// Details
// Shipping
// Payment

// type CheckoutStep = 'Details' | 'Shipping' | 'Payment';

enum CheckoutStep {
  Details = 'Details',
  Shipping = 'Shipping',
  Payment = 'Payment',
}

export default function Enums() {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>(CheckoutStep.Details);

  return (
    <div className="m-2">
      {checkoutStep === CheckoutStep.Details && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheckoutStep(CheckoutStep.Shipping)}>
            Next
          </button>
        </>
      )}

      {checkoutStep === CheckoutStep.Shipping && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheckoutStep(CheckoutStep.Payment)}>
            Next
          </button>
        </>
      )}

      {checkoutStep === CheckoutStep.Payment && (
        <>
          <h1>Payment</h1>
        </>
      )}
    </div>
  );
}
