import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";

export default function AddCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && 
      <Modal onClose={()=> setIsOpenModal(false)}>
        <CreateCabinForm onCloseNodal={()=> setIsOpenModal(false)}/>
        </Modal>
        }
    </div>
  );
}
