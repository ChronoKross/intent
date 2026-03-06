"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function LayoutTextFlipDemo() {
  return (
    <div>
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row ">
        <LayoutTextFlip
          text="Date with "
          words={["Intent", "Purpose", "Nathan ;)", "Purpose"]}
        />
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
        No more ego-farming, game playing or gas lighting.
      </p>
    </div>
  );
}
