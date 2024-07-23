export default function useBrelan(cartes) {
  // Triez les cartes par valeur
  const sortedCards = [...cartes].sort((a, b) => a.valeur - b.valeur);

  // Initialiser un objet pour stocker les occurrences de chaque valeur de carte
  const occurrences = {};

  // Compter le nombre d'occurrences de chaque valeur de carte
  sortedCards.forEach((card) => {
    occurrences[card.valeur] = (occurrences[card.valeur] || 0) + 1;
  });

  // Parcourir les occurrences pour trouver un brelan
  for (const valeur in occurrences) {
    if (occurrences[valeur] === 3) {
      // Convertir la valeur en nombre
      const valeurNombre = parseInt(valeur, 10);

      // Si une valeur apparaît trois fois, c'est un brelan
      const brelan = cartes.filter((card) => card.valeur === valeurNombre);
      const nomsCartes = brelan.map((carte) => carte.name);
      return {
        combinaison: brelan,
        nomCartes: nomsCartes,
      };
    }
  }

  // Si aucun brelan n'est trouvé, retourner null
  return null;
}

// fonctionne
