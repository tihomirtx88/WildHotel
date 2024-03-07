import supabase, { supabaseUrl } from "./supabase.";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

export async function createEditCabin(newCabin) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // Crate unique name and replace // with one server will create
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;
  // 1 Create cabin

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error("Cabins could not be created");
  }
  //2 Upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabins-images")
    .upload(imageName, newCabin.image);

  //3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }
  return data;
}
