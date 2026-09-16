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
    title: "Put it into words",
    text: "Write what you have been carrying, at your own pace.",
  },
  {
    icon: EyeOff,
    title: "Keep your name out of it",
    text: "Your confession belongs to the story, not your identity.",
  },
  {
    icon: HeartHandshake,
    title: "Feel less alone",
    text: "Read gentle, honest words from people who understand.",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A quieter corner of the internet
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          Some things are easier to say <em>without a name.</em>
        </motion.h1>
        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
        >
          Confesso is an anonymous space for the thoughts, secrets, and small
          truths you need to let out. No profiles. No pressure. No judgment.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24 }}
        >
          <Link className="button button-primary" href="/auth">
            Share a confession <ArrowRight size={18} />
          </Link>
          <a className="text-link" href="#how-it-works">
            How it works
          </a>
        </motion.div>
        <motion.div
          className="thought-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Send size={18} aria-hidden="true" />
          <p>“I didn’t need advice. I just needed somewhere safe to say it.”</p>
          <span>— anonymous</span>
        </motion.div>
      </section>
      <section id="how-it-works" className="steps-section">
        <div className="section-intro">
          <p className="eyebrow">No complicated rules</p>
          <h2>A little space can make a big difference.</h2>
        </div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, text }, index) => (
            <article className="step" key={title}>
              <span className="step-number">0{index + 1}</span>
              <Icon aria-hidden="true" size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="community" className="community-section">
        <div>
          <p className="eyebrow">You’re welcome here</p>
          <h2>Your story can stay yours.</h2>
          <p>
            Whether it feels enormous or impossibly small, it deserves room to
            exist. Start with one honest sentence.
          </p>
        </div>
        <Link className="button button-light" href="/auth">
          Begin anonymously <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
