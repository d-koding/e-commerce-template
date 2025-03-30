"use server";
import { createClient } from "@/utils/supabase/server/createClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(formData: FormData) {
    const supabase = await createClient();
  
    // Minimal validation to ensure inputs are strings
    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");
  
    if (!email || typeof email !== "string") {
      return { error: "Email is required and must be a string" };
    }
    if (!password || typeof password !== "string") {
      return { error: "Password is required and must be a string" };
    }
    if (!username || typeof username !== "string") {
      return { error: "Username is required and must be a string" };
    }
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
      email: email as string,
      password: password as string,
      options: {
        data: {
          username: username as string,
        },
      },
    };
  
    const { error } = await supabase.auth.signUp(data);
  
    if (error) {
      return { error: error.message };
    }
  
    revalidatePath("/", "layout");
    redirect("/login?message=Registration successful! Please check your email to confirm.");
  }