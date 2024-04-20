import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterfield="discount"
        optionsArray={[{ value: "all", label: "all" }, { value: "no-discount", label: "no-discount" }, { value: "with-discount", label: "with-discount" }]}
      />
    </TableOperations>
  );
}
