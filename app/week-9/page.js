"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Week 9 Shopping List</h1>

            {!user ? (
                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Login with GitHub
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
                            href="/week-9/shopping-list"
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