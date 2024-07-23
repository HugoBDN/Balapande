import usePaire from "./usePaire";
import useBrelan from "./useBrelan";

export default function useFullHouse(cartes) {
  // Utiliser le hook pour identifier les paires
  const paire = usePaire(cartes);

  // Utiliser le hook pour identifier les brelans
  const brelan = useBrelan(cartes);

  // Vérifier si nous avons à la fois une paire et un brelan
  if (paire && brelan) {
    return {
      combinaison: [...paire.combinaison, ...brelan.combinaison],
      nomCartes: `${paire.nomCartes} et ${brelan.nomCartes}`,
    };
  }

  // Si nous n'avons ni paire ni brelan, retourner null
  return null;
}

// fonctionne
