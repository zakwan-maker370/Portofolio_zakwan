import { useEffect } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";

function CursorGlow() {
  const x = useMotionValue(-400),
    y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 120, damping: 20 }),
    sy = useSpring(y, { stiffness: 120, damping: 20 });
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const move = (e) => {
      x.set(e.clientX - 200);
      y.set(e.clientY - 200);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-[90px] [@media(pointer:fine)]:block"
    />
  );
}

export default function App() {
  const location = useLocation();
  return (
    <MotionConfig reducedMotion="user">
      <CursorGlow />
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
