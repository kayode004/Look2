'use client'
import Link from 'next/link'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container-responsive py-4">
          <Link href="/" className="text-2xl font-bold">LooKit</Link>
        </div>
      </header>

      <main className="container-responsive py-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          <div className="text-center py-12 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Cart is empty</h2>
            <p className="text-gray-600 mb-6">Start adding fashion items to rent</p>
            <Link href="/explore" className="btn-primary inline-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
