"use client"
import { motion } from "framer-motion";
import Link from "next/link";


// import { Link } from "lucide-react";
import { Edit, Mail, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="mt-4 flex justify-center items-center ">
    <motion.div
      initial={{ opacity: 0, y: 60 }}      // start lower + invisible
      animate={{ opacity: 1, y: 0 }}       // fade in + rise up
      transition={{ duration: 0.9, ease: "easeOut" }} 
      className="w-full lg:w-[70%] mt-5 border-white border-3 border-dotted p-2 lg:p-4 space-y-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-3xl md:text-4xl"
      >
        What is Confesso?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="text-blue-700 px-4 text-xl"
      >
        Ever had something on your mind you couldn’t tell anyone? Confesso is
        your anonymous space to spill secrets, share stories, or just vent —
        no names, no judgment.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-3xl md:text-4xl"
      >
        How it works:
      </motion.h1>

      {/* LIST fades in all at once */}
      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="list-none p-0 m-0 grid gap-3 text-blue-700"
      >
        <li className="flex items-center gap-3">
          <Edit size={22} strokeWidth={1.6} aria-hidden="true" />
          <span className="text-base">
            Write it: Type out whatever’s on your mind.
          </span>
        </li>

        <li className="flex items-center gap-3">
          <Mail size={22} strokeWidth={1.6} aria-hidden="true" />
          <span className="text-base">
            Share it: Hit send, stay anonymous.
          </span>
        </li>

        <li className="flex items-center gap-3">
          <MessageCircle size={22} strokeWidth={1.6} aria-hidden="true" />
          <span className="text-base">
            Connect: Read confessions from others who get it.
          </span>
        </li>
      </motion.ul>

      <motion.h4
        initial={{ opacity: 0, x: 90 } }
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-white text-xl mt-4"
      >
        Confessions big or small — everyone has a story. What’s yours?
      </motion.h4>
    </motion.div>
      </div>
      <p className="text-center mt-8 text-2xl md:text-3xl">
        First time coming to our page? No problems!
      </p>
      <p className="text-center mt-8 text-2xl md:text-3xl">
        <Link
          href="/Login"
          className="text-blue-700 underline hover:text-blue-600"
        >
          Sign up here
        </Link>
        <span> to continue to Confesso</span>
      </p>
    </div>
  );
}
