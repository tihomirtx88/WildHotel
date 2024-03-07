import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://mpwacdlynnypykpzgjtg.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wd2FjZGx5bm55cHlrcHpnanRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5OTg5MDYsImV4cCI6MjAxODU3NDkwNn0.G_PqgT3QLP8sCJ4GumTFcNicvYKq99sSBY6xcRcfF4Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;