import { SearchLocation } from "./SearchInput";
import { Spinner } from "./Spinner";

export function Searching({
  search,
  input,
}: {
  search: SearchLocation;
  input: string;
}) {
  if (!input.trim() || search === undefined) return null;
  if (search === "fetching") {
    return (
      <div className="searching">
        <p className="searching__text">
          Searching for <strong>{input}</strong>
        </p>
        <Spinner className="searching__spinner" />
      </div>
    );
  }
  if (search === "no-result") {
    return (
      <p className="searching searching__text">
        No results for <strong>{input}</strong>
      </p>
    );
  }
  if (search === "error") {
    return (
      <p className="searching searching__text">
        Error retrieving results for <strong>{input}</strong>
      </p>
    );
  }
  return (
    <p className="searching searching__text">
      Showing results for <strong>{input}</strong>
    </p>
  );
}
