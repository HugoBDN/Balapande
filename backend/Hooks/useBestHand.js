/* eslint-disable no-plusplus */
import useQuinteFlushRoyale from "./useRoyalQuinteFlush";
import useQuinteFlush from "./useQuinteFlush";
import useCarre from "./useCarré";
import useFullHouse from "./useFullHouse";
import useCouleur from "./useFlush";
import useQuinte from "./useQuinte";
import useBrelan from "./useBrelan";
import usePaire from "./usePaire";

export default function useMeilleureMain(cartes) {
  // Identifier chaque type de main dans la sélection de cartes
  const quinteFlushRoyale = useQuinteFlushRoyale(cartes);
  const quinteFlush = useQuinteFlush(cartes);
  const carre = useCarre(cartes);
  const fullHouse = useFullHouse(cartes);
  const couleur = useCouleur(cartes);
  const quinte = useQuinte(cartes);
  const brelan = useBrelan(cartes);
  const paire = usePaire(cartes);

  // Créer un tableau pour stocker toutes les mains identifiées
  const mainsTrouvees = [];

  // Ajouter les mains identifiées au tableau
  if (quinteFlushRoyale) mainsTrouvees.push(quinteFlushRoyale);
  if (quinteFlush) mainsTrouvees.push(quinteFlush);
  if (carre) mainsTrouvees.push(carre);
  if (fullHouse) mainsTrouvees.push(fullHouse);
  if (couleur) mainsTrouvees.push(couleur);
  if (quinte) mainsTrouvees.push(quinte);
  if (brelan) mainsTrouvees.push(brelan);
  if (paire) mainsTrouvees.push(paire);

  // Renvoyer toutes les mains identifiées
  return mainsTrouvees;
}
