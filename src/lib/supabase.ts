import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface ChatSession {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  status: 'active' | 'archived' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface ChatMessage {
  id: string;
  session_id: string;
  text: string;
  sender: 'user' | 'admin' | 'ai';
  email?: string;
  created_at: string;
}
