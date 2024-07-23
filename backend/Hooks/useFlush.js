export default function useCouleur(cartes) {
  // Vérifier si toutes les cartes ont la même couleur
  const { couleur } = cartes[0];
  const toutesMemesCouleurs = cartes.every(
    (carte) => carte.couleur === couleur
  );

  // Si toutes les cartes ont la même couleur, renvoyer les noms des cartes
  if (toutesMemesCouleurs && cartes.length === 5) {
    const nomCartes = cartes.map((carte) => carte.name);
    return {
      combinaison: cartes,
      nomCartes: nomCartes.join(", "),
    };
  }

  // Sinon, retourner null
  return null;
}

// fonctionne
