-- Create reservations table for ॥ रामाश्रम ॥
CREATE TABLE IF NOT EXISTS reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL DEFAULT 2,
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS but allow public inserts for reservations (no auth required for booking)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert reservations (public booking form)
CREATE POLICY "Allow public inserts" ON reservations
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (restaurant staff) can view reservations
CREATE POLICY "Allow authenticated users to view" ON reservations
  FOR SELECT
  USING (true);
