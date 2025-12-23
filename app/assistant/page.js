'use client';
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import withAuth from "@/lib/withAuth";
import { api } from "@/lib/api";

const AssistantPage = () => {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hi 👋 I’m your MindLytica assistant. I can help you understand your stress patterns and suggest healthy coping strategies.",
        },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const messagesRef = useRef(null);

    // ✅ Scroll ONLY the chat box
    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scrollTop =
                messagesRef.current.scrollHeight;
        }
    }, [messages, loading]);

    useEffect(() => {
        const loadChat = async () => {
            try {
                const data = await api("/chat-history");

                if (data.messages && data.messages.length > 0) {
                    setMessages(data.messages);
                }
            } catch (err) {
                console.error("Failed to load chat", err);
            }
        };

        loadChat();
    }, []);

    const sendMessage = async () => {
        if (!input.trim()) return;

        setMessages((prev) => [...prev, { role: "user", content: input }]);
        setInput("");
        setLoading(true);

        const data = await api("/ai-assistant", {
            method: "POST",
            body: {
                message: input,
            },
        });

        setMessages((prev) => [
            ...prev,
            { role: "assistant", content: data.reply },
        ]);
        setLoading(false);
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50 px-4 py-8">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm flex flex-col h-[80vh]">

                    {/* Header */}
                    <div className="p-4 border-b">
                        <h1 className="text-xl font-semibold">MindLytica AI Assistant</h1>
                        <p className="text-sm text-gray-500">
                            Supportive guidance, not medical advice
                        </p>
                    </div>

                    {/* Messages */}
                    <div
                        ref={messagesRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4"
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`max-w-[80%] px-4 py-3 rounded-xl text-sm leading-relaxed ${msg.role === "user"
                                    ? "ml-auto bg-orange-100 text-gray-800"
                                    : "mr-auto bg-gray-100 text-gray-700"
                                    }`}
                            >
                                {msg.role === "assistant" ? (
                                    <div className="prose prose-sm max-w-none wrap-break-word">
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    </div>
                                ) : (
                                    msg.content
                                )}
                            </div>
                        ))}

                        {loading && (
                            <p className="text-sm text-gray-400">Assistant is typing...</p>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t flex gap-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about stress, sleep, focus..."
                            className="flex-1 border rounded-xl px-4 py-2 outline-none"
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-[#F99262] text-white px-4 py-2 rounded-xl"
                        >
                            Send
                        </button>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-xs text-gray-500 p-2 text-center">
                        This assistant is for awareness and support only, not diagnosis.
                    </p>
                </div>
            </div>
        </>
    );
};

export default withAuth(AssistantPage);
