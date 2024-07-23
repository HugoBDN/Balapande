import useQuinteFlush from "./useQuinteFlush";

export default function useQuinteFlushRoyale(cartes) {
  // Utiliser le hook pour identifier une quinte flush
  const quinteFlush = useQuinteFlush(cartes);

  // Vérifier si la quinte flush est une quinte flush royale
  if (quinteFlush && quinteFlush.nomCartes === "10, J, Q, K, A") {
    return quinteFlush;
  }

  // Si ce n'est pas une quinte flush royale, retourner null
  return null;
}

// fonctionne
