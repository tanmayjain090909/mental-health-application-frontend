"use client";
import React, { useState } from "react";
import AutoScrollAdventure from "@/app/components/AutoScrollAdventure";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DesignerLoader from "@/app/components/DesignerLoader";
import { api } from "@/lib/api";

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: "",
    });
    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!form.username || !form.email || !form.password || !form.confirm_password) {
            setMsg("All fields are required");
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setMsg("Invalid email format");
            setLoading(false);
            return;
        }

        if (form.password.length < 6) {
            setMsg("Password must be at least 6 characters");
            setLoading(false);
            return;
        }

        if (form.password !== form.confirm_password) {
            setMsg("Passwords do not match");
            setLoading(false);
            return;
        }

        const data = await api("/auth/register", {
            method: "POST",
            body: form,
        });

        if (data.error) {
            setMsg(data.error);
            setLoading(false);
        } else {
            setMsg("Account created successfully! Redirecting to login...");
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        }
    };

    return (
        <div className="flex flex-row">
            {/* Left Illustration */}
            <div className="hidden lg:block w-full lg:w-[55%]">
                <AutoScrollAdventure padding="p-20" />
            </div>

            {/* Right Signup Section */}
            <div className="h-screen w-full lg:w-[45%] px-4 lg:px-20 py-10 flex flex-col items-center justify-center">
                {/* Logo */}
                <Link href="/">
                    <div className="h-[100px] w-[300px] sm:h-[80px] sm:w-[300px] overflow-hidden relative">
                        <Image
                            sizes="400px"
                            priority
                            fill
                            className="object-cover"
                            src="/images/wellMind_Logo.png"
                            alt="MindLytica logo"
                        />
                    </div>
                </Link>

                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl mt-6 font-semibold text-center">
                    Join <span className="text-[#F99262]">MindLytica</span>
                </h1>

                {/* Subheading */}
                <p className="mt-4 text-center text-[#626262] text-sm sm:text-base max-w-md">
                    Create your account to start your personalized mental wellness journey.
                    MindLytica helps students manage stress, anxiety, and academic pressure.
                </p>

                {/* Signup Form */}
                <form
                    className="mt-6 gap-4 flex flex-col w-full max-w-[475px]"
                    onSubmit={handleSubmit}
                >
                    <input
                        value={form.username}
                        onChange={handleChange}
                        className="border border-[#e3dede] text-[#626262] rounded-md p-2 h-[50px]"
                        placeholder="Username"
                        type="text"
                        name="username"
                    />

                    <input
                        value={form.email}
                        onChange={handleChange}
                        className="border border-[#e3dede] text-[#626262] rounded-md p-2 h-[50px]"
                        placeholder="Email address"
                        type="email"
                        name="email"
                    />

                    <input
                        value={form.password}
                        onChange={handleChange}
                        className="border border-[#e3dede] text-[#626262] rounded-md p-2 h-[50px]"
                        placeholder="Password"
                        type="password"
                        name="password"
                    />

                    <input
                        value={form.confirm_password}
                        onChange={handleChange}
                        className="border border-[#e3dede] text-[#626262] rounded-md p-2 h-[50px]"
                        placeholder="Confirm password"
                        type="password"
                        name="confirm_password"
                    />

                    {msg && <span className="text-red-500">{msg}</span>}

                    {!loading ? (
                        <button
                            type="submit"
                            className="bg-[#F99262] text-white rounded-2xl p-2 h-[45px]"
                        >
                            Create Account
                        </button>
                    ) : (
                        <div className="flex justify-center scale-60">
                            <DesignerLoader />
                        </div>
                    )}
                </form>

                {/* Login Redirect */}
                <span className="mt-3 text-[#626262] text-sm sm:text-base">
                    Already have an account?
                    <span className="text-[#F99262] font-semibold">
                        <Link href="/login"> Log in</Link>
                    </span>
                </span>


                {/* Disclaimer */}
                <p className="mt-6 text-xs text-center text-[#8a8a8a] max-w-md">
                    MindLytica is not a medical diagnosis tool. If you are experiencing severe
                    distress, please seek help from a qualified mental health professional.
                </p>
            </div>
        </div>
    );
};

export default Signup;
