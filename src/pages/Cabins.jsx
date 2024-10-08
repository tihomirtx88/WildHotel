import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

export default function Cabins() {
  return (
    <>
      <Row className="cabin-row-wrapper" type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row className="cabin-row-wrapper-body">
        <CabinTable />
        <AddCabin/>
      </Row>
    </>
  );
}
