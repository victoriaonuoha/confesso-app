"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserRound, Mail, CalendarDays, LogOut } from "lucide-react";
import { apiRequest } from "../../lib/api";

export default function ProfilePage() {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProfile() {
      const token = localStorage.getItem("confesso_access_token");

      if (!token) {
        router.replace("/auth/Login");
        return;
      }

      try {
        const data = await apiRequest("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (isMounted) {
          setProfile(data);
        }
      } catch (err) {
        if (!isMounted) return;

        if (
          err.message.toLowerCase().includes("credentials") ||
          err.message.toLowerCase().includes("token") ||
          err.message.toLowerCase().includes("unauthorized")
        ) {
          localStorage.removeItem("confesso_access_token");
          router.replace("/auth/Login");
          return;
        }

        setError(err.message || "Unable to load your profile.");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProfile();

    return () => {
      isMounted = false;
    };
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("confesso_access_token");
    router.replace("/auth/Login");
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <p className="text-gray-600">Loading your profile...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
          <h1 className="mb-3 text-xl font-semibold text-gray-900">
            Unable to load profile
          </h1>
          <p className="mb-6 text-sm text-red-600">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="rounded-lg bg-[#5a3c8a] px-5 py-2.5 text-white hover:opacity-90"
          >
            Try again
          </button>
        </div>
      </main>
    );
  }

  if (!profile) return null;

 const joinedDate = profile?.created_at
  ? new Date(profile.created_at).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  : "Not available";

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => router.push("/")}
          className="mb-6 text-sm font-medium text-[#5a3c8a] hover:underline"
        >
          &larr; Back to Confesso
        </button>

        <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="bg-[#5a3c8a] px-6 py-8 text-white sm:px-8">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/15">
              <UserRound size={32} />
            </div>

            <h1 className="text-2xl font-bold">My Profile</h1>
            <p className="mt-2 text-sm text-white/80">
              View your Confesso account details.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <UserRound className="mt-1 text-[#5a3c8a]" size={21} />
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="mt-1 font-medium text-gray-900">
                  {profile.username}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-[#5a3c8a]" size={21} />
              <div>
                <p className="text-sm text-gray-500">Email address</p>
                <p className="mt-1 break-all font-medium text-gray-900">
                  {profile.email}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CalendarDays className="mt-1 text-[#5a3c8a]" size={21} />
              <div>
                <p className="text-sm text-gray-500">Member since</p>
                <p className="mt-1 font-medium text-gray-900">
                  {joinedDate}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={18} />
                Log out
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}