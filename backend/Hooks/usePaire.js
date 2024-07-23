export default function usePaire(cartes) {
  // Initialiser un objet pour stocker les occurrences de chaque nom de carte
  const occurrences = {};

  // Compter le nombre d'occurrences de chaque nom de carte
  cartes.forEach((card) => {
    occurrences[card.name] = (occurrences[card.name] || 0) + 1;
  });

  // Parcourir les occurrences pour trouver une paire
  for (const nomCarte in occurrences) {
    if (occurrences[nomCarte] === 2) {
      // Si un nom de carte apparaît deux fois, c'est une paire
      const paire = cartes.filter((card) => card.name === nomCarte);
      const nomCartes = paire.map((carte) => carte.name);
      return {
        combinaison: paire,
        // eslint-disable-next-line object-shorthand
        nomCartes: nomCartes,
      };
    }
  }

  // Si aucune paire n'est trouvée, retourner null
  return null;
}

// fonctionne
