/* eslint-disable no-plusplus */
export default function useQuinte(cartes) {
  // Tri des cartes par valeur
  const sortedCards = [...cartes].sort((a, b) => a.valeur - b.valeur);

  // Vérification de l'existence d'une suite consécutive de cinq valeurs
  for (let i = 0; i <= sortedCards.length - 5; i++) {
    let isQuinte = true;
    for (let j = i + 1; j < i + 5; j++) {
      if (sortedCards[j].valeur !== sortedCards[j - 1].valeur + 1) {
        isQuinte = false;
        break;
      }
    }
    if (isQuinte) {
      const quinte = sortedCards.slice(i, i + 5);
      const nomCartes = quinte.map((carte) => carte.name);
      return {
        combinaison: quinte,
        nomCartes: nomCartes.join(", "),
      };
    }
  }

  // Si aucune quinte n'est trouvée, retourner null
  return null;
}

// fonctionne
