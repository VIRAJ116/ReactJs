
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ipxkgidhsazkjmsflzmx.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlweGtnaWRoc2F6a2ptc2Zsem14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4ODk1MTcsImV4cCI6MjAyOTQ2NTUxN30.-hfEO-EeF9IR7sGDdR4UjNr7cdnE4lntIi0Rs59i0Gk"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;