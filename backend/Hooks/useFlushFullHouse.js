import usePaire from "./usePaire";
import useBrelan from "./useBrelan";
import useCouleur from "./useFlush";

export default function useFlushFullHouse(cartes) {
  // Utiliser le hook pour identifier une paire
  const paire = usePaire(cartes);

  // Utiliser le hook pour identifier un brelan
  const brelan = useBrelan(cartes);

  // Utiliser le hook pour identifier une couleur
  const couleur = useCouleur(cartes);

  // Vérifier si nous avons à la fois un Full House et une couleur
  if (paire && brelan && couleur) {
    return {
      combinaison: [...paire.combinaison, ...brelan.combinaison],
      nomCartes: `${paire.nomCartes} et ${brelan.nomCartes}`,
      couleur: couleur.nomCartes, // Ajouter la couleur à la sortie
    };
  }

  // Si nous n'avons ni Full House ni couleur, retourner null
  return null;
}

// fonctionne
