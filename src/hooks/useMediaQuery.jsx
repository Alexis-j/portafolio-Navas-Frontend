import { useEffect, useState } from "react";

export function useMediaQuery(query) {
  const getMatches = () =>
    typeof window !== "undefined" && window.matchMedia(query).matches;

  const [matches, setMatches] = useState(getMatches);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);

    handler(); 
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
}
