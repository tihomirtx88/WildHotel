import supabase from "./supabase.";

export async function apiAuth({email, password}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  
  return data;
}

export async function getCurrentUser(){
    // Get data from localstorage
    const {data: session } = await supabase.auth.getSession();
    if(!session.session) return null;

    const { data, error} = await supabase.auth.getUser();

    if (error) {
        console.error(error.message);
        throw new Error(error.message);
      }
      
      return data?.user;
}
