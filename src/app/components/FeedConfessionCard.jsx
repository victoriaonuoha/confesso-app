"use client";

import { MessageCircle, MoreHorizontal } from "lucide-react";

function formatDate(dateString) {
  if (!dateString) return "";

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function ConfessionCard({ confession }) {
  const {
    title,
    content,
    anonymous,
    author,
    created_at,
  } = confession;

  const displayAuthor = anonymous
    ? "Anonymous"
    : author || "Unknown";

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/15 hover:bg-white/[0.05]">
      
      {/* Author information */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-sm font-semibold text-purple-300">
            {anonymous
              ? "?"
              : displayAuthor.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              {displayAuthor}
            </p>

            <p className="text-xs text-gray-500">
              {formatDate(created_at)}
            </p>
          </div>
        </div>

        <button
          className="rounded-full p-2 text-gray-500 transition hover:bg-white/10 hover:text-gray-300"
          aria-label="More options"
        >
          <MoreHorizontal size={19} />
        </button>
      </div>

      {/* Title */}
      {title && (
        <h2 className="mt-5 text-lg font-semibold leading-snug text-white">
          {title}
        </h2>
      )}

      {/* Confession content */}
      <p
        className={`whitespace-pre-wrap text-sm leading-7 text-gray-300 ${
          title ? "mt-3" : "mt-5"
        }`}
      >
        {content}
      </p>

      {/* Bottom section */}
      <div className="mt-5 flex items-center gap-5 border-t border-white/10 pt-4">
        <button
          className="flex items-center gap-2 text-xs text-gray-500 transition hover:text-gray-300"
          aria-label="Comments"
        >
          <MessageCircle size={16} />
          <span>Comments</span>
        </button>
      </div>
    </article>
  );
}

