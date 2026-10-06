"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "../components/FeedHeader";
import BottomNav from "../components/FeedButtomNav";
import ConfessionCard from "../components/FeedConfessionCard";
import { apiRequest } from "../../lib/api";

export default function FeedPage() {
  const router = useRouter();

  const [confessions, setConfessions] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(true);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");

  // Prevent duplicate requests
  const loadingMoreRef = useRef(false);

  // Prevent duplicate initial request
  const initialLoadRef = useRef(false);

  // --------------------------------------------------
  // LOAD CONFESSIONS
  // --------------------------------------------------

  const loadConfessions = useCallback(async (pageNumber) => {
    try {
      setError("");

      const data = await apiRequest(
        `/confessions/?page=${pageNumber}&limit=10`
      );

      setConfessions((previous) => {
        if (pageNumber === 1) {
          return data.items;
        }

        return [...previous, ...data.items];
      });

      setPage(pageNumber);
      setHasNext(data.has_next);
    } catch (err) {
      setError(
        err.message || "Unable to load confessions."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // --------------------------------------------------
  // INITIAL LOAD
  // --------------------------------------------------

  useEffect(() => {
    const token = localStorage.getItem(
      "confesso_access_token"
    );

    if (!token) {
      router.replace("/auth/Login");
      return;
    }

    if (initialLoadRef.current) {
      return;
    }

    initialLoadRef.current = true;

    loadConfessions(1);
  }, [router, loadConfessions]);

  // --------------------------------------------------
  // LOAD NEXT PAGE
  // --------------------------------------------------

  const loadMore = useCallback(async () => {
    if (
      loadingMoreRef.current ||
      !hasNext
    ) {
      return;
    }

    loadingMoreRef.current = true;
    setLoadingMore(true);

    try {
      await loadConfessions(page + 1);
    } finally {
      loadingMoreRef.current = false;
      setLoadingMore(false);
    }
  }, [
    page,
    hasNext,
    loadConfessions,
  ]);

  // --------------------------------------------------
  // AUTOMATIC SCROLL PAGINATION
  // --------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      // Don't do anything while the first page is loading
      if (loading) {
        return;
      }

      // Don't do anything if there are no more pages
      if (!hasNext) {
        return;
      }

      // Don't start another request while one is running
      if (loadingMoreRef.current) {
        return;
      }

      const scrollPosition =
        window.innerHeight + window.scrollY;

      const pageHeight =
        document.documentElement.scrollHeight;

      // Start loading when the user is 500px
      // away from the bottom.
      const distanceFromBottom =
        pageHeight - scrollPosition;

      if (distanceFromBottom <= 500) {
        loadMore();
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    // Also check immediately after rendering.
    // This handles cases where the page is short
    // enough that the user doesn't need to scroll.
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [
    loading,
    hasNext,
    loadMore,
  ]);

  // --------------------------------------------------
  // PAGE
  // --------------------------------------------------

  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      <Header />

      <main className="mx-auto max-w-2xl px-4 pb-28 pt-8 sm:px-6">

        {/* PAGE INTRODUCTION */}
        <section className="mb-8">
          <p className="text-sm font-medium text-purple-400">
            Confesso
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            What people are saying
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Read honest thoughts, stories and confessions
            shared by the Confesso community.
          </p>
        </section>

        {/* CREATE POST PROMPT */}
        <button
          onClick={() => router.push("/create")}
          className="mb-7 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-purple-500/30 hover:bg-white/[0.05]"
        >
          <div>
            <p className="text-sm font-medium text-white">
              Have something to say?
            </p>

            <p className="mt-1 text-xs text-gray-500">
              Share your confession anonymously or publicly.
            </p>
          </div>

          <span className="rounded-full bg-purple-500 px-4 py-2 text-xs font-medium text-white">
            Post
          </span>
        </button>

        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
            <p className="text-sm text-red-300">
              {error}
            </p>

            <button
              onClick={() => {
                setError("");
                setLoading(true);
                loadConfessions(1);
              }}
              className="mt-3 text-xs text-red-200 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* INITIAL LOADING */}
        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-7 w-7 animate-spin rounded-full border-2 border-white/10 border-t-purple-400" />
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading &&
          !error &&
          confessions.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
              <h2 className="text-lg font-semibold text-white">
                No confessions yet
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Be the first person to share something.
              </p>

              <button
                onClick={() => router.push("/create")}
                className="mt-5 rounded-full bg-purple-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-purple-600"
              >
                Create a confession
              </button>
            </div>
          )}

        {/* CONFESSION FEED */}
        {!loading &&
          confessions.length > 0 && (
            <div className="space-y-5">
              {confessions.map((confession) => (
                <ConfessionCard
                  key={confession.id}
                  confession={confession}
                />
              ))}
            </div>
          )}

        {/* LOADING NEXT PAGE */}
        {!loading && loadingMore && (
          <div className="flex justify-center py-8">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/10 border-t-purple-400" />
          </div>
        )}

        {/* END OF FEED */}
        {!loading &&
          !loadingMore &&
          !hasNext &&
          confessions.length > 0 && (
            <p className="py-8 text-center text-xs text-gray-600">
              You've reached the end.
            </p>
          )}
      </main>

      <BottomNav />
    </div>
  );
}

