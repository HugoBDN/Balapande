export default function useCarre(cartes) {
  // Initialiser un objet pour stocker les occurrences de chaque nom de carte
  const occurrences = {};

  // Compter le nombre d'occurrences de chaque nom de carte
  cartes.forEach((carte) => {
    occurrences[carte.name] = (occurrences[carte.name] || 0) + 1;
  });

  // Parcourir les occurrences pour trouver un carré
  for (const nomCarte in occurrences) {
    if (occurrences[nomCarte] === 4) {
      // Si un nom de carte apparaît quatre fois, c'est un carré
      const carre = cartes.filter((carte) => carte.name === nomCarte);
      const nomsCartes = carre.map((carte) => carte.name);
      return {
        combinaison: carre,
        nomCartes: nomsCartes.join(", "),
      };
    }
  }

  // Si aucun carré n'est trouvé, retourner null
  return null;
}

// fonctionne
