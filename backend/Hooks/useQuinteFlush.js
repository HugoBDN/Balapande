import useQuinte from "./useQuinte";
import useCouleur from "./useFlush";

export default function useQuinteFlush(cartes) {
  // Utiliser le hook pour identifier une quinte
  const quinte = useQuinte(cartes);

  // Si aucune quinte n'est trouvée, retourner null
  if (!quinte) {
    return null;
  }

  // Utiliser le hook pour identifier une couleur
  const couleur = useCouleur(quinte.combinaison);

  // Si aucune couleur n'est trouvée, retourner null
  if (!couleur) {
    return null;
  }

  // Si nous avons à la fois une quinte et une couleur, c'est une quinte flush
  return {
    combinaison: couleur.combinaison,
    nomCartes: couleur.nomCartes,
  };
}

// fonctionne
