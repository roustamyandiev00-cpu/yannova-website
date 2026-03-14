import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Try to create shop_orders table
    const { error: ordersError } = await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS shop_orders (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          order_number TEXT UNIQUE NOT NULL,
          customer_name TEXT NOT NULL,
          customer_email TEXT NOT NULL,
          customer_phone TEXT NOT NULL,
          shipping_street TEXT NOT NULL,
          shipping_city TEXT NOT NULL,
          shipping_postal_code TEXT NOT NULL,
          shipping_country TEXT DEFAULT 'België' NOT NULL,
          billing_street TEXT,
          billing_city TEXT,
          billing_postal_code TEXT,
          billing_country TEXT,
          items JSONB NOT NULL,
          subtotal DECIMAL(10,2) NOT NULL,
          shipping_cost DECIMAL(10,2) NOT NULL,
          tax DECIMAL(10,2) DEFAULT 0,
          total DECIMAL(10,2) NOT NULL,
          status TEXT DEFAULT 'pending',
          payment_status TEXT DEFAULT 'pending',
          payment_method TEXT,
          payment_id TEXT,
          customer_notes TEXT,
          admin_notes TEXT,
          tracking_number TEXT,
          tracking_url TEXT,
          created_at TIMESTAMPTZ DEFAULT NOW(),
          updated_at TIMESTAMPTZ DEFAULT NOW(),
          paid_at TIMESTAMPTZ,
          shipped_at TIMESTAMPTZ,
          delivered_at TIMESTAMPTZ
        );
      `
    });

    if (ordersError) {
      throw new Error(`Failed to create shop_orders: ${ordersError.message}`);
    }

    // Try to create shop_order_items table
    const { error: itemsError } = await supabase.rpc('exec', {
      sql: `
        CREATE TABLE IF NOT EXISTS shop_order_items (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          order_id UUID REFERENCES shop_orders(id) ON DELETE CASCADE,
          product_id TEXT NOT NULL,
          product_name TEXT NOT NULL,
          product_sku TEXT,
          quantity INTEGER NOT NULL,
          unit_price DECIMAL(10,2) NOT NULL,
          total_price DECIMAL(10,2) NOT NULL,
          created_at TIMESTAMPTZ DEFAULT NOW()
        );
      `
    });

    if (itemsError) {
      throw new Error(`Failed to create shop_order_items: ${itemsError.message}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Database tables succesvol aangemaakt! ✅',
    });

  } catch (error: any) {
    console.error('Setup error:', error);
    
    return NextResponse.json(
      {
        error: error.message || 'Failed to setup database',
        instructions: 'Gebruik de handmatige methode via Supabase Dashboard',
      },
      { status: 500 }
    );
  }
}
