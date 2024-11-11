'use client'
import "@/css/style.css"
import { useScroll } from "framer-motion";
import { motion } from 'framer-motion';

export default function ProgressBar(){
    const { scrollYProgress } = useScroll();
    return(
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    )
}