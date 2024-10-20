import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";


export default function AddCabin() {
  const { isAdmin } = useUser();
  return (
    <div>
      {isAdmin ? (  <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>): ("")}
    
    </div>
  );
}

// Use Modal v1
// export default function AddCabin() {
//     const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal &&
//       <Modal onClose={()=> setIsOpenModal(false)}>
//         <CreateCabinForm onCloseNodal={()=> setIsOpenModal(false)}/>
//         </Modal>
//         }
//     </div>
//   );
// }
