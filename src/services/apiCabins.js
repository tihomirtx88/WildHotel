import supabase from "./supabase.";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const {data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

export async function createEditCabin(newCabin){

  const { data, error } = await supabase
  .from('cabins')
  .insert([
    newCabin
  ])
  .select()

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be created");
  }

  return data;
}
