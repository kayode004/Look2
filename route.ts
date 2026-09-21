import { createClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { listing_id, quantity } = await req.json()

    let { data: cart } = await supabase
      .from('shopping_carts')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (!cart) {
      const { data: newCart } = await supabase
        .from('shopping_carts')
        .insert({ user_id: user.id })
        .select()
        .single()
      cart = newCart
    }

    const { data: listing } = await supabase
      .from('item_listings')
      .select('rental_price_kobo')
      .eq('id', listing_id)
      .single()

    if (!listing) return NextResponse.json({ error: 'Listing not found' }, { status: 404 })

    const { data, error } = await supabase
      .from('cart_items')
      .insert({
        cart_id: cart.id,
        listing_id,
        quantity,
        item_type: 'rent',
        price_kobo: listing.rental_price_kobo
      })
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
