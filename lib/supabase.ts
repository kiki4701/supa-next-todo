// 서버측의 로직은 RouterHandler, RSC, Middleware, ServerActions 4가지로 구분
// RSC 에서는 cookie를 조작 할 수 없고
// 나머지 3개에서는 cookie를 조작 할 수 있지만 조작법이 조금씩 다르다

import { Database } from "@/types/supabase";
import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// -ServerActions, RouterHandler
// export const createServerSideClient = async (serverComponent = false) => {
//   const cookieStore = cookies();

//   return createServerClient<Database>(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get: (key) => cookieStore.get(key)?.value,
//         set: (key, value, options) => {
//           if (serverComponent) return;
//           cookieStore.set(key, value, options);
//         },
//         remove: (key, options) => {
//           if (serverComponent) return;
//           cookieStore.set(key, "", options);
//         },
//       },
//     }
//   );
// };

export const createServerSideClient = async (serverComponent = false) => {
  const cookieStore = cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (k) => cookieStore.get(k)?.value,
        set: (k, v, o) => {
          if (!serverComponent) cookieStore.set(k, v, o);
        },
        remove: (k, o) => {
          if (!serverComponent) cookieStore.set(k, "", o);
        },
      },
    }
  );
};

// export type ServerClient = ReturnType<
//   typeof createServerClient<Database, "public">
// >;

// export function getServerClient(serverComponent = false): ServerClient {
//   const cookieStore = cookies();

//   return createServerClient<Database, "public">(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get: (k) => cookieStore.get(k)?.value,
//         set: (k, v, o) => {
//           if (!serverComponent) cookieStore.set(k, v, o);
//         },
//         remove: (k, o) => {
//           if (!serverComponent) cookieStore.set(k, "", o);
//         },
//       },
//     }
//   );
// }

// -RSC (리액트 서버 컴포넌트에서 사용하는 React Server Client)
export const createServerSideClientRSC = async () => {
  return createServerSideClient(true);
  // return getServerClient(true);
};

// -Middleware
export const createServerSideMiddleware = async (
  req: NextRequest,
  res: NextResponse
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key) => getCookie(key, { req, res }),
        set: (key, value, options) => {
          setCookie(key, value, { req, res, ...options });
        },
        remove: (key, options) => {
          setCookie(key, "", { req, res, ...options });
        },
      },
    }
  );
};
