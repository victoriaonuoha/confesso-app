"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  EyeOff,
  HeartHandshake,
  PenLine,
  Send,
} from "lucide-react";
import Header from "./components/Header";

const steps = [
  {
    icon: PenLine,
    title: "Write it:",
    text: "Type out whatever’s on your mind.",
  },
  {
    icon: EyeOff,
    title: "Share it:",
    text: "Hit send, stay anonymous, and let it go.",
  },
  {
    icon: HeartHandshake,
    title: "Connect:",
    text: "Read confessions from others who get it.",
  },
];
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#34204e] px-5 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5";
const eyebrowClass =
  "font-mono text-[.71rem] font-medium uppercase tracking-[.13em] text-white/80";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-[url('/images/matt-gross-9aCkSl6YcXg-unsplash.jpg')] bg-cover bg-center bg-fixed"
      />
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-[url('/images/matt-gross-9aCkSl6YcXg-unsplash.jpg')] bg-cover bg-center bg-fixed" />
      <Header />
      <section  className="mx-auto max-w-[920px] text-white px-7 py-28 text-center max-[720px]:px-5 max-[720px]:py-[76px]">
        <motion.p
          className={eyebrowClass}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A quieter corner of the internet
        </motion.p>
        <motion.h1
          className="mx-auto my-4 mb-[22px] max-w-[760px] font-display text-[clamp(3.05rem,7vw,5.7rem)] leading-[.98] tracking-[-.045em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Some things are easier to say{" "}
          <em className="text-[#5a3c8a]">without a name.</em>
        </motion.h1>
        <motion.p
          className="mx-auto max-w-[590px] text-[1.12rem] leading-[1.65] text-[#686371]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          Confesso is an anonymous space for the thoughts, secrets, and small
          truths you need to let out. No profiles. No pressure. No judgment.
        </motion.p>
        <motion.div
          className="mt-[34px] flex items-center justify-center gap-[22px] max-[720px]:flex-col max-[720px]:gap-[18px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          <Link className={buttonClass} href="/auth">
            Share a confession <ArrowRight size={18} />
          </Link>
          <a
            className="font-semibold underline underline-offset-4 transition-colors hover:text-[#5a3c8a]"
            href="#how-it-works"
          >
            How it works
          </a>
        </motion.div>
        <motion.div
          className="mx-auto mt-[76px] max-w-[430px] rotate-[-1.2deg] rounded-[3px_22px_3px_22px] bg-[#f0ebff] px-7 py-6 text-left text-[#34204e] shadow-[7px_8px_0_#d9d0f5]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Send size={18} aria-hidden="true" />
          <p className="my-3 font-display text-[1.15rem] leading-[1.45]">
            “I didn’t need advice. I just needed somewhere safe to say it.”
          </p>
          <span className="font-mono text-[.72rem]">— anonymous</span>
        </motion.div>
      </section>
      <section
        id="how-it-works"
        className="text-white px-7 py-[95px] max-[720px]:px-5 max-[720px]:py-[70px]"
      >
        <div className="mx-auto flex max-w-[1080px] items-baseline gap-10 max-[720px]:block">
          <p className={eyebrowClass}>No complicated rules</p>
          <h2 className="max-w-[640px] font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] tracking-[-.045em] max-[720px]:mt-3">
            A little space can make a big difference.
          </h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-[1080px] grid-cols-3 gap-[22px] max-[720px]:mt-8 max-[720px]:grid-cols-1">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article
              className="relative min-h-[230px] rounded bg-[#fffcf7]/70 p-7 max-[720px]:min-h-0"
              key={title}
            >
              <span className="absolute right-6 font-mono text-[.78rem] text-[#b4a8c8]">
                0{index + 1}
              </span>
              <Icon
                className="mt-7 text-[#5a3c8a]"
                aria-hidden="true"
                size={24}
              />
              <h3 className="my-3.5 mb-2 text-[1.08rem] text-[#5a3c8a] font-bold">{title}</h3>
              <p className="text-[.93rem] leading-[1.55] text-[#686371]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="community"
        className="mx-auto flex max-w-[1080px] items-end justify-between gap-12 px-7 py-[100px] max-[720px]:block max-[720px]:px-5 max-[720px]:py-[74px]"
      >
        <div classname= "text-white">
          <p className={eyebrowClass}>You’re welcome here</p>
          <h2 className="mt-3 max-w-[640px] text-white font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.04] tracking-[-.045em]">
            Your story can stay yours.
          </h2>
          <p className="mt-[18px] max-w-[530px] leading-[1.6] text-white/60">
            Whether it feels enormous or impossibly small, it deserves room to
            exist. Start with one honest sentence.
          </p>
        </div>
        <Link
          className="mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ede8ff] px-5 py-3.5 font-semibold text-[#34204e] transition-transform hover:-translate-y-0.5 min-[721px]:mt-0"
          href="/auth"
        >
          Begin anonymously <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
