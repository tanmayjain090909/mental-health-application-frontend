"use client";
import { React, useState } from 'react'
import AutoScrollAdventure from '@/app/components/AutoScrollAdventure'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import Image from 'next/image';
import DesignerLoader from '@/app/components/DesignerLoader';
import { api } from '@/lib/api';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [form, setform] = useState({ email: '', password: '' });
    const [msg, setMsg] = useState('');


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg("");

        if (!form.email || !form.password) {
            setMsg('All fields are required');
            setLoading(false);
            return;
        }

        const res = await signIn("credentials", {
            redirect: false,
            email: form.email,
            password: form.password,
        });

        if (res.ok) {
            router.push(`${process.env.NEXT_PUBLIC_BASE_URL}`);
        } else {
            // ✅ Show backend error message here
            if (res.error) {
                if (res.error.startsWith("UseOAuth:")) {
                    const provider = res.error.split(":")[1];
                    setMsg(`Please login using ${provider.charAt(0).toUpperCase() + provider.slice(1)}`);
                } else if (res.error === "UserNotFound") {
                    setMsg("User not found. Please register first.");
                } else if (res.error === "IncorrectPassword") {
                    setMsg("Incorrect password. Try again.");
                } else {
                    setMsg("Login failed. Please try again.");
                }
            } else {
                setMsg("Invalid credentials");
            }
            setLoading(false);
        }
    };

    return (
        <>

            <div className="flex flex-row">
                {/* Left Animation / Illustration */}
                <div className="hidden lg:block w-full lg:w-[55%]">
                    <AutoScrollAdventure padding="p-20" />
                </div>

                {/* Right Login Section */}
                <div className="w-[400px] lg:w-[45%] h-screen p-6 sm:p-10 md:p-20 flex flex-col items-center">
                    {/* Logo */}
                    <Link href="/">
                            <div className="h-[100px] w-[300px] sm:h-[100px] sm:w-[400px] overflow-hidden relative">
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
                    <h1 className="text-3xl sm:text-4xl md:text-5xl mt-8 font-semibold text-center">
                        Welcome to <span className="text-[#F99262]">MindLytica</span>
                    </h1>

                    {/* Subheading */}
                    <p className="mt-4 text-center text-[#626262] text-sm sm:text-base max-w-md">
                        Your AI-powered mental wellness companion designed to support students
                        with stress, anxiety, and academic pressure.
                    </p>

                    {/* Login Form */}
                    <form
                        className="mt-6 gap-4 flex flex-col w-full sm:w-[400px] md:w-[475px]"
                        onSubmit={handleSubmit}
                    >
                        <input
                            value={form.email || ""}
                            onChange={handleChange}
                            className="border border-[#e3dede] text-[#626262] rounded-md p-2 h-[50px]"
                            placeholder="Email address"
                            type="email"
                            name="email"
                            id="email"
                        />

                        <input
                            value={form.password || ""}
                            onChange={handleChange}
                            className="border border-[#e3dede] text-[#626262] rounded-md p-2 h-[50px]"
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                        />

                        {msg && <span className="text-red-500">{msg}</span>}

                        {!loading ? (
                            <button
                                type="submit"
                                className="bg-[#F99262] text-white rounded-2xl p-2 h-[45px]"
                            >
                                Log in to MindLytica
                            </button>
                        ) : (
                            <div className="flex justify-center scale-60">
                                <DesignerLoader />
                            </div>
                        )}
                    </form>

                    {/* Signup */}
                    <span className="mt-5 text-[#626262] text-sm sm:text-base">
                        Don&apos;t have an account?
                        <span className="text-[#F99262] font-semibold cursor-pointer">
                            <Link href="/signup"> Sign up</Link>
                        </span>
                    </span>

                    

                    {/* Disclaimer */}
                    <p className="mt-6 text-xs text-center text-[#8a8a8a] max-w-md">
                        MindLytica is not a medical diagnosis tool. If you are experiencing severe
                        distress, please seek help from a qualified professional or local support
                        services.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Login
