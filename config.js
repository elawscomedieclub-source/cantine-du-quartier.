// Configuration du site des CLIENTS (Cantine du Quartier). Même base de données que le site équipe.
// La clé "anon" est publique par conception. Ne mettez JAMAIS ici la clé secrète du projet.
window.CANTINE_CONFIG = {
  url: 'https://koxdgyzlsusqtvfjtmnw.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveGRneXpsc3VzcXR2Zmp0bW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIwOTc5MDUsImV4cCI6MjEwNzY3MzkwNX0.Mgs_kqRuojlkZCt2wARxtN8jVJuVgK2dSYKuSjmNyYk',
  clientAccounts: false,   // false : commandes sans compte seulement ; true : comptes clients par SMS
  staffUrl: 'https://cantineduquartier-equipe.netlify.app',   // site de l'équipe : le lien « Espace équipe » y mène
};
