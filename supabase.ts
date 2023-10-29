import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://epyjvrtstdfrakwvfauw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVweWp2cnRzdGRmcmFrd3ZmYXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg1ODYxMjYsImV4cCI6MjAxNDE2MjEyNn0.HSLxmjR4jzZIzg6fJ-PYTnVDnqUESyDOd7ffv_oK89E');

async function createGasTable(gasSize: string, refillDate: Date, userEmail: string) {
  const { data, error } = await supabase
    .from('gasfill')
    .insert([
      { gasSize: gasSize, refillDate: refillDate, userEmail: userEmail },
    ]);
  if (error) {
    console.error('Error creating gas table:', error);
  } else {
    console.log('Gas table created successfully');
  }
}

const gasSize = '12.5kg'; 
const refillDate = new Date(); 
const userEmail = 'frankolayemi@gmail.com';

createGasTable(gasSize, refillDate, userEmail);
