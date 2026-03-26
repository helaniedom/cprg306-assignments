"use client";

import { useState } from "react";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week10Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            setError(null);
            await gitHubSignIn();
        } catch (error) {
            setError("Login failed. Please try again.");
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            setError(null);
            await firebaseSignOut();
        } catch (error) {
            setError("Logout failed. Please try again.");
            console.log(error);
        }
    };

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Week 10 Shopping List</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {!user ? (
                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Login / Sign up with GitHub
                </button>
            ) : (
                <div>
                    <p className="mb-4">
                        Welcome, {user.displayName} ({user.email})
                    </p>

                    <div className="flex gap-4">
                        <button
                            onClick={handleLogout}
                            className="bg-red-600 text-white px-4 py-2 rounded"
                        >
                            Logout
                        </button>

                        <Link
                            href="/week-10/shopping-list"
                            className="bg-green-600 text-white px-4 py-2 rounded"
                        >
                            Go to Shopping List
                        </Link>
                    </div>
                </div>
            )}
        </main>
    );
}