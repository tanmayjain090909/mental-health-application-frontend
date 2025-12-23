import { getSession } from "next-auth/react";

export async function api(path, options = {}) {
  const session = await getSession();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}`,
    {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(session?.backendToken && {
          Authorization: `Bearer ${session.backendToken}`,
        }),
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
    }
  );

  if (!res.ok) throw new Error("API Error");
  return res.json();
}
