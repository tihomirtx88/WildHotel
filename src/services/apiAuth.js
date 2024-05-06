import supabase, { supabaseUrl } from "./supabase.";

export async function signUpApi({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data;
}

export async function apiAuth({ email, password }) {
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

export async function getCurrentUser() {
  // Get data from localstorage
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  return data?.user;
}

export async function logoutApi() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData;
  // Only one of them will be a true on the same time
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  // 1. Update password OR fullName
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  if (!avatar) return data;

  // 2. Upload avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage.from('avatar').upload(fileName, avatar);

  if (storageError) {
    console.error(storageError.message);
    throw new Error(storageError.message);
  }

  // 3.Update avatar in user
  const { data: updateUser, error: errorAfterUpdate} = await supabase.auth.updateUser({data: {
    avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`
  }});

  if (errorAfterUpdate) {
    console.error(errorAfterUpdate.message);
    throw new Error(errorAfterUpdate.message);
  }

  return updateUser;
}
