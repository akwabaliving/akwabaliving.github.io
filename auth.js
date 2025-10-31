// Ecoute l'auth Supabase
supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_IN") {
    window.location.href = "dashboard.html"; 
  }
});
