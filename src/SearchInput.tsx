import { useEffect, useState } from "react";
import { Searching } from "./Searching";
import { Coordinate } from "./distances";

export type SearchLocation =
  | undefined
  | "fetching"
  | "no-result"
  | "error"
  | Coordinate;

export function SearchInput({
  search,
  setSearch,
}: {
  search: SearchLocation;
  setSearch: React.Dispatch<React.SetStateAction<SearchLocation>>;
}) {
  const [input, setInput] = useState("");
  useEffect(() => {
    if (input.trim().length > 2) {
      setSearch("fetching");
      fetch(
        "https://nominatim.openstreetmap.org/search?q=" +
          input.trim() +
          "&format=json&limit=1"
      )
        .then((result) => {
          result.json().then((data) => {
            if (
              !Array.isArray(data) ||
              data[0]?.lat === undefined ||
              data[0]?.lon === undefined
            ) {
              setSearch("no-result");
            } else {
              setSearch({
                latitude: parseFloat(data[0].lat),
                longitude: parseFloat(data[0].lon),
              });
            }
          });
        })
        .catch(() => {
          setSearch("error");
        });
    }
  }, [input, setSearch]);
  return (
    <div className="input">
      <input
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a branch"
        autoFocus
      />
      <Searching search={search} input={input} />
    </div>
  );
}
