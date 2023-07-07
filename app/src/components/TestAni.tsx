'use client'
import { motion } from "framer-motion";
export default function TestAni() {
    return (
        <div className="bg-black mx-auto justify-center columns-2 gap- place-content-center">
        <motion.div
            className="w-52 h-52 bg-white"
            animate={{
                scale: [0.6, 0.6, 0.6, 0.6, 0.6],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
        <motion.div
            className="w-52 h-52 bg-pink-700"
            animate={{
                scale: [0.6, 0.6, 0.6, 0.6, 0.6],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
        </div>
        
    );
}