function useCarteHaute(selectedCards) {
  // Triez les cartes par valeur de la plus haute à la plus basse
  const sortCards = selectedCards.sort((a, b) => b.valeur - a.valeur);

  // Récupérez la carte haute spécifique, c'est la première carte après le tri
  const carteHaute = sortCards[0];

  // Renvoie à la fois la valeur de la carte haute et la carte haute spécifique
  return {
    valeurCarteHaute: carteHaute.valeur,
    // eslint-disable-next-line object-shorthand
    carteHaute: carteHaute,
  };
}

export default useCarteHaute;

// fonctionne
