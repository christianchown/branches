import { useEffect, useState } from "react";
import { SearchLocation, SearchInput } from "./SearchInput";
import { Branch, useBranches } from "./Branch";
import { closestBranchesTo } from "./distances";
import { BranchDetails } from "./BranchDetails";

export default function App() {
  const branches = useBranches();
  const [search, setSearch] = useState<SearchLocation>();
  const [closest, setClosest] = useState<undefined | Branch>();
  useEffect(() => {
    if (branches && typeof search === "object") {
      const [closestBranch] = closestBranchesTo(1, search, branches);
      setClosest(closestBranch);
    } else {
      setClosest(undefined);
    }
  }, [search, branches]);
  return (
    <main>
      <h1>Santander UK branch locator</h1>
      <SearchInput search={search} setSearch={setSearch} />
      {closest && <BranchDetails branch={closest} />}
    </main>
  );
}
