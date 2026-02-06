import { Branch, branchAddress } from "./Branch";

export function BranchDetails({ branch }: { branch: Branch }) {
  return (
    <section className="branch">
      <span className="branch__label">Branch name:</span>
      <span className="branch__value">{branch.Name}</span>
      <span className="branch__label">Address:</span>
      <span className="branch__value">{branchAddress(branch)}</span>
      {branch.ServiceAndFacility && (
        <>
          <span className="branch__label">Services:</span>
          <span className="branch__value">
            {branch.ServiceAndFacility.join(", ")}
          </span>
        </>
      )}
      {branch.Accessibility && (
        <>
          <span className="branch__label">Accessibility:</span>
          <span className="branch__value">
            {branch.Accessibility.join(", ")}
          </span>
        </>
      )}
    </section>
  );
}
