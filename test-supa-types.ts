import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/supabase";
const c = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
c.from("todos_with_rls").insert([{ content: "hi" }]);
