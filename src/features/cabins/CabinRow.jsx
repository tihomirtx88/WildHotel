import styled from "styled-components";
import { useDeleteCabin } from "./useDeleteCabin";
import { formatCurrency } from "./../../utils/helpers";
import CreateCabinForm from "./../cabins/CreateCabinForm";

import {
  HiPencil,
  HiSquare2Stack,
  HiTrash,
} from "react-icons/hi2";
import { useState } from "react";
import { useCrateCabin } from "./useCreateCabins";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const ButtonDelete = styled.button`
  padding: 5px;
  max-width: 100px;
`;

export default function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin} = useCrateCabin();

  const {
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    discription,
    id: cabinId,
  } = cabin;
  
  function handleDublicate(){
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity, regularPrice, discount, image, discription
    });
  }

  return (
    <>
      <TableRow role="row">
        <Img src={image} />
        <Cabin>{name}</Cabin>
        <div>Fits up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (<Discount>{formatCurrency(discount)}</Discount>) : (<span>&mdash;</span>)}
        <div>
          <button disabled={isCreating} onClick={handleDublicate}><HiSquare2Stack/></button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <ButtonDelete
            onClick={() => deleteCabin(cabinId)}
            disabled={isDeleting}
          >
            <HiTrash />
          </ButtonDelete>
        </div>
      </TableRow>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
