"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

const OAuthCallback = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: session, status } = useSession();

    const error = searchParams.get("error");
    const provider = searchParams.get("provider");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (error) {
            if (error === "EmailExistsWithPassword") {
                setMsg(
                    "Email already registered with password login. Please use your password."
                );
            } else if (error === "UseProvider" && provider) {
                setMsg(`Please login using ${provider}.`);
            } else {
                setMsg("Login failed. Please try again.");
            }
            return;
        }

        if (status === "authenticated") {
            router.replace("/");
        }

        if (status === "unauthenticated") {
            setMsg("Authentication failed. Please try again.");
        }
    }, [status, error, provider, router]);

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-screen">
            {msg ? (
                <>
                    <p className="text-red-500 text-xl text-center">{msg}</p>
                    <button
                        onClick={() => router.push("/login")}
                        className="bg-[#F99262] text-white px-4 py-2 rounded-md hover:bg-[#f2763f] transition"
                    >
                        Back to Login
                    </button>
                </>
            ) : (
                <p className="text-gray-600 text-xl">
                    Logging you in...
                </p>
            )}
        </div>
    );
};

export default OAuthCallback;
