import type { Metadata } from 'next'
import Link from 'next/link'
import { CreditCard, ShieldCheck, Banknote, HelpCircle, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payments',
  description: 'Accepted payment methods, security information, and answers to common billing questions.',
}

const acceptedMethods = [
  { name: 'Visa', note: 'Credit & debit' },
  { name: 'Mastercard', note: 'Credit & debit' },
  { name: 'American Express', note: 'Credit' },
  { name: 'Discover', note: 'Credit' },
  { name: 'PayPal', note: 'Balance or linked card' },
  { name: 'Bank Transfer', note: 'Local JMD / USD' },
]

export default function PaymentsPage() {
  return (
    <>
      <div className="border-b">
        <div className="container-custom py-section-sm text-center">
          <h1 className="text-h1 font-heading font-semibold">Payments</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            How you can pay, and how we keep your information safe.
          </p>
        </div>
      </div>

      <div className="container-custom py-section max-w-3xl">
        <div className="space-y-12">
          {/* Accepted methods */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="h-6 w-6" strokeWidth={1.5} />
              <h2 className="text-h3 font-heading font-semibold">Accepted payment methods</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We accept all major credit and debit cards, as well as select alternative payment
                methods. All transactions are processed in the currency shown at checkout.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {acceptedMethods.map((method) => (
                  <div
                    key={method.name}
                    className="border rounded-sm p-4"
                  >
                    <p className="text-sm font-medium text-foreground">{method.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{method.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Currency & charges */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Banknote className="h-6 w-6" strokeWidth={1.5} />
              <h2 className="text-h3 font-heading font-semibold">Currency & charges</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>Prices are displayed in your regional currency where available.</li>
                <li>
                  If you pay with a card issued in a different currency, your bank may apply a
                  foreign exchange fee — please check with your card issuer.
                </li>
                <li>
                  Your card is only charged once your order is confirmed. Pre-authorizations may
                  briefly appear on your statement before clearing.
                </li>
                <li>
                  The charge on your statement will appear under our store or payment processor
                  name.
                </li>
              </ul>
            </div>
          </section>

          {/* Security */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-6 w-6" strokeWidth={1.5} />
              <h2 className="text-h3 font-heading font-semibold">Security</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Your payment information is encrypted end-to-end and handled by PCI-DSS compliant
                payment providers. We never see or store your full card number, expiry date, or
                CVV on our servers.
              </p>
              <div className="flex items-start gap-3 border rounded-sm p-4 bg-muted/30">
                <Lock className="h-4 w-4 mt-0.5 shrink-0" strokeWidth={1.5} />
                <p className="text-xs">
                  All checkout pages are served over HTTPS and protected by 3D Secure where
                  supported by your bank, adding an extra layer of fraud protection.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="h-6 w-6" strokeWidth={1.5} />
              <h2 className="text-h3 font-heading font-semibold">Common questions</h2>
            </div>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div>
                <p className="font-medium text-foreground mb-1">
                  Why was my card declined?
                </p>
                <p>
                  Declines usually come from your bank rather than us — common reasons include
                  insufficient funds, incorrect billing details, or international transactions
                  being blocked. Double-check your details and try again, or contact your bank.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  When will I be charged?
                </p>
                <p>
                  Your card is charged as soon as you place the order. If an item is later found
                  to be unavailable, we&apos;ll refund the difference to your original payment
                  method.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Can I pay in installments?
                </p>
                <p>
                  Installment options depend on your region and may appear at checkout if
                  supported. We don&apos;t add any additional fees for installment plans.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  How do refunds work?
                </p>
                <p>
                  Refunds are issued to the original payment method and typically appear within
                  5–10 business days, depending on your bank. See our{' '}
                  <Link href="/refund-policy" className="underline hover:text-foreground">
                    refund policy
                  </Link>{' '}
                  for full details.
                </p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t pt-10">
            <p className="text-sm text-muted-foreground">
              Still have questions about payments or billing?{' '}
              <Link href="/contact" className="underline hover:text-foreground">
                Contact our support team
              </Link>{' '}
              and we&apos;ll be happy to help.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
