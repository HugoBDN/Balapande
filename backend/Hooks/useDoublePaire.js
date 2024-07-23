export default function useDoublePaire(cartes) {
  // Initialiser un objet pour stocker les occurrences de chaque nom de carte
  const occurrences = {};

  // Compter le nombre d'occurrences de chaque nom de carte
  cartes.forEach((card) => {
    occurrences[card.name] = (occurrences[card.name] || 0) + 1;
  });

  // Initialiser un tableau pour stocker les paires
  const paires = [];

  // Parcourir les occurrences pour trouver les paires
  for (const nomCarte in occurrences) {
    if (occurrences[nomCarte] === 2) {
      // Si un nom de carte apparaît deux fois, c'est une paire
      const paire = cartes.filter((card) => card.name === nomCarte);
      paires.push(paire);
    }
  }

  // Si on a exactement deux paires, c'est une double paire
  if (paires.length === 2) {
    const combinaison = paires.reduce((acc, paire) => acc.concat(paire), []);
    const nomCartes = combinaison.map((carte) => carte.name);
    return {
      // eslint-disable-next-line object-shorthand
      combinaison: combinaison,
      nomCartes: nomCartes.join(", "),
    };
  }

  // Si aucune double paire n'est trouvée, retourner null
  return null;
}

// fonctionne
