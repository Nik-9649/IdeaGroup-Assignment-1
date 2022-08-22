import { useEffect } from "react";

export const GetPlayers = () => {
  // http clinet
  //fetch
  //axios
  const url = "https://prod.roundrocktennis.com/v1/players";
  useEffect(() => {
    const getPlayersWithUseEffect = async () => {
      const playersFromBackend = await fetch(url, { method: "GET" })
        .then(response => response.json())
        .then(response => response)
        .catch(error => {
          console.error("Data submission Error:", error);
          throw new Error("ALlah kahir kerasiya");
        });
      return playersFromBackend;
    };
    return getPlayersWithUseEffect;
  }, [url]);
};
