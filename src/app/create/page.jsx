"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff, Send } from "lucide-react";

import Header from "../components/FeedHeader";
import BottomNav from "../components/FeedButtomNav";
import { apiRequest } from "../../lib/api";

export default function CreatePage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [anonymous, setAnonymous] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!content.trim()) {
      setError("Please write your confession before posting.");
      return;
    }

    try {
      setLoading(true);

      const data = await apiRequest("/confessions/", {
        method: "POST",
        body: JSON.stringify({
          title: title.trim() || null,
          content: content.trim(),
          anonymous,
        }),
        headers: {
          Authorization: `Bearer ${localStorage.getItem("confesso_access_token")}`,
        },
      });

      // After successfully creating the confession,
      // take the user back to the feed.
      router.push("/feed");
    } catch (error) {
      setError(
        error.message || "Unable to create your confession."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#08080c] text-white">
      <Header />

      <main className="mx-auto max-w-2xl px-4 pb-28 pt-8 sm:px-6">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="mb-7 flex items-center gap-2 text-sm text-gray-500 transition hover:text-white"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        {/* Heading */}
        <section className="mb-8">
          <p className="text-sm font-medium text-purple-400">
            Create a confession
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Say what you want to say.
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Share your thoughts, story or secret with the
            Confesso community.
          </p>
        </section>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3">
            <p className="text-sm text-red-300">
              {error}
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Title
              <span className="ml-2 text-xs font-normal text-gray-600">
                Optional
              </span>
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Give your confession a title..."
              maxLength={150}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/50 focus:bg-white/[0.05]"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Your confession
            </label>

            <textarea
              id="content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write what you really want to say..."
              rows={9}
              required
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/50 focus:bg-white/[0.05]"
            />

            <div className="mt-2 flex justify-end">
              <span className="text-xs text-gray-600">
                {content.length} characters
              </span>
            </div>
          </div>

          {/* Anonymous option */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                  {anonymous ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Post anonymously
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your username won't be displayed with
                    this confession.
                  </p>
                </div>
              </div>

              {/* Toggle */}
              <button
                type="button"
                onClick={() => setAnonymous(!anonymous)}
                aria-label="Toggle anonymous posting"
                aria-pressed={anonymous}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  anonymous
                    ? "bg-purple-500"
                    : "bg-white/15"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                    anonymous
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-500 py-3.5 text-sm font-semibold text-white transition hover:bg-purple-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={17} />

            {loading ? "Posting..." : "Post Confession"}
          </button>
        </form>
      </main>

      <BottomNav />
    </div>
  );
}

