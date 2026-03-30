"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./TerminalShell.module.css";

const BOOT_HEADER = [
  { t: "blank", c: "" },
  { t: "name",  c: "  Yashvardhan Singh" },
  { t: "dim",   c: "  Robotics Systems Engineer  ·  Co-Founder, Osocius Dynamics" },
  { t: "dim",   c: "  " + "─".repeat(54) },
  { t: "blank", c: "" },
];

const SYSTEM_LINES = [
  { t: "blue",  c: "  YashOS v3.14  —  Robotics · AI · Systems" },
  { t: "dim",   c: "  " + "─".repeat(46) },
  { t: "blank", c: "" },
  { t: "ok",    c: "  [ OK ]  kernel modules" },
  { t: "ok",    c: "  [ OK ]  sensor-fusion drivers" },
  { t: "ok",    c: "  [ OK ]  embedded intelligence stack" },
  { t: "ok",    c: "  [ OK ]  project filesystem  ( 6 entries )" },
  { t: "ok",    c: "  [ OK ]  github handshake" },
  { t: "blank", c: "" },
  { t: "info",  c: "  type  help  to see available commands." },
  { t: "blank", c: "" },
];

const PROJECTS: Record<string, { title: string; date: string; tags: string; description: string; link: string }> = {
  aircanvas:  { title: "Air Canvas – Gesture HCI",       date: "2026-01-08", tags: "python · opencv · mediapipe", description: "Gesture-driven drawing system. Multi-hand tracking, infinite canvas, 30+ FPS.", link: "/work/aircanvas" },
  wizard:     { title: "Wizard – AI Document Assistant", date: "2025-11-20", tags: "fastapi · chromadb · openai",  description: "Semantic document platform: vector search, task extraction, SSE upload, Telegram bot.", link: "/work/wizard" },
  hush:       { title: "HUSH – ISL Sign Language",       date: "2025-10-05", tags: "react · python · ml",         description: "ISL recognition: real-time gesture detection, word builder, reference guide.", link: "/work/hush" },
  mario:      { title: "Mario – C++ Physics Engine",     date: "2025-09-15", tags: "c++ · physics · game-engine", description: "Custom 2D physics engine, collision detection, gravity, sprite animation.", link: "/work/mario" },
  empleadora: { title: "Empleadora – Job Board",         date: "2025-08-01", tags: "nextjs · mern · auth",        description: "Full-stack recruitment: job listings, applicant tracking, analytics.", link: "/work/empleadora" },
  "once-ui":  { title: "Once UI – Design System",        date: "2025-07-10", tags: "react · design-sys · scss",   description: "Extensible design system: tokens, accessible components, dark mode.", link: "/work/building-once-ui-a-customizable-design-system" },
};

type C = "default"|"amber"|"dim"|"blue"|"ok"|"error"|"info"|"cmd"|"blank"|"name";
type Line = { id: number; c: C; text: string };

let _n = 0;
const id = () => ++_n;

const CMDS = ["help","whoami","ls","ls -la","cat","cd","skills","contact","clear","matrix","date","pwd","uname"];

export function TerminalShell() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [val, setVal] = useState("");
  const [hist, setHist] = useState<string[]>([]);
  const [hi, setHi] = useState(-1);
  const [ready, setReady] = useState(false);
  const [matrixOn, setMatrixOn] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  const add = useCallback((c: C, text: string) =>
    setLines(p => [...p, { id: id(), c, text }]), []);

  const addMany = useCallback((arr: { c: C; text: string }[]) =>
    setLines(p => [...p, ...arr.map(a => ({ id: id(), ...a }))]), []);

  // Boot
  useEffect(() => {
    let dead = false;
    (async () => {
      await sleep(60);
      if (dead) return;

      // Name header — displayed line by line
      for (const l of BOOT_HEADER) {
        if (dead) return;
        await sleep(l.t === "blank" ? 40 : 80);
        setLines(p => [...p, { id: id(), c: l.t as C, text: l.c }]);
      }

      // System boot lines
      for (const l of SYSTEM_LINES) {
        if (dead) return;
        await sleep(l.t === "blank" ? 30 : 110);
        setLines(p => [...p, { id: id(), c: l.t as C, text: l.c }]);
      }
      if (!dead) setReady(true);
    })();
    return () => { dead = true; };
  }, []);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [lines]);

  // Matrix
  const doMatrix = useCallback(() => {
    setMatrixOn(true);
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    cv.width = window.innerWidth;
    cv.height = window.innerHeight;
    const cols = Math.floor(cv.width / 14);
    const drops = Array(cols).fill(1) as number[];
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>[]{}";
    const frame = () => {
      ctx.fillStyle = "rgba(8,10,15,0.08)";
      ctx.fillRect(0, 0, cv.width, cv.height);
      drops.forEach((y, i) => {
        ctx.fillStyle = i % 5 === 0 ? "#dde8f0" : i % 3 === 0 ? "#4fc3f7" : "#1a3a5299";
        ctx.font = "13px monospace";
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 14, y * 14);
        if (y * 14 > cv.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
      rafRef.current = requestAnimationFrame(frame);
    };
    frame();
    setTimeout(() => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ctx.clearRect(0, 0, cv.width, cv.height);
      setMatrixOn(false);
      add("info", "  matrix sequence terminated.");
    }, 5000);
  }, [add]);

  // Commands
  const run = useCallback((raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    add("cmd", `  ❯  ${cmd}`);
    setHist(h => [cmd, ...h]);
    setHi(-1);
    const [base, ...rest] = cmd.toLowerCase().split(/\s+/);
    const arg = rest.join(" ");

    switch (base) {
      case "help":
        addMany([
          { c:"blank",   text:"" },
          { c:"amber",   text:"  NAVIGATION" },
          { c:"default", text:"  cd <about | work | blog | ~>" },
          { c:"blank",   text:"" },
          { c:"amber",   text:"  PROJECTS" },
          { c:"default", text:"  ls                list projects" },
          { c:"default", text:"  ls -la            list with details" },
          { c:"default", text:"  cat <slug>        read project" },
          { c:"blank",   text:"" },
          { c:"amber",   text:"  IDENTITY" },
          { c:"default", text:"  whoami   skills   contact" },
          { c:"blank",   text:"" },
          { c:"amber",   text:"  SYSTEM" },
          { c:"default", text:"  date  pwd  uname  clear  matrix" },
          { c:"blank",   text:"" },
        ]);
        break;

      case "whoami":
        addMany([
          { c:"blank",   text:"" },
          { c:"amber",   text:"  Yashvardhan Singh" },
          { c:"default", text:"  Role    Robotics Systems Engineer & Co-Founder, Osocius Dynamics" },
          { c:"default", text:"  Focus   Physical AI for real-world aging environments" },
          { c:"default", text:"  Stack   C++  ·  Python  ·  ROS  ·  Sensor Fusion  ·  Embedded AI" },
          { c:"dim",     text:"  Motto   'It Should Work' is not a strategy." },
          { c:"blank",   text:"" },
          { c:"info",    text:"  → skills   → ls   → contact" },
          { c:"blank",   text:"" },
        ]);
        break;

      case "ls":
        if (arg === "-la" || arg === "-l" || arg === "-al") {
          addMany([
            { c:"blank",   text:"" },
            { c:"dim",     text:`  total ${Object.keys(PROJECTS).length}` },
            { c:"blank",   text:"" },
            ...Object.entries(PROJECTS).map(([slug, p]) => ({
              c: "default" as C,
              text: `  ${p.date}   ${p.tags.split(" · ")[0].padEnd(12)}   ${slug}`,
            })),
            { c:"blank",   text:"" },
            { c:"info",    text:"  cat <slug>  to inspect" },
            { c:"blank",   text:"" },
          ]);
        } else {
          addMany([
            { c:"blank",  text:"" },
            { c:"amber",  text:"  " + Object.keys(PROJECTS).join("   ") },
            { c:"blank",  text:"" },
            { c:"info",   text:`  ${Object.keys(PROJECTS).length} projects found  ·  ls -la for details` },
            { c:"blank",  text:"" },
          ]);
        }
        break;

      case "cat": {
        const p = PROJECTS[arg.replace(/\/$/, "")];
        if (!p) {
          add("error", `  not found: '${arg}'  —  run ls to see projects`);
        } else {
          addMany([
            { c:"blank",   text:"" },
            { c:"amber",   text:`  ╭─  ${p.title}` },
            { c:"default", text:`  │   ${p.date}   ${p.tags}` },
            { c:"dim",     text:`  │` },
            { c:"default", text:`  │   ${p.description}` },
            { c:"dim",     text:`  │` },
            { c:"blue",    text:`  │   ${p.link}` },
            { c:"amber",   text:`  ╰${"─".repeat(52)}` },
            { c:"blank",   text:"" },
          ]);
        }
        break;
      }

      case "cd": {
        const map: Record<string,string> = { about:"/about",work:"/work",blog:"/blog","~":"/","":"/","/":"/",home:"/" };
        const route = map[arg];
        if (route !== undefined) {
          add("ok", `  → navigating to ${route || "/"}…`);
          setTimeout(() => router.push(route || "/"), 350);
        } else {
          add("error", `  cd: '${arg}' not found  —  try: about  work  blog  ~`);
        }
        break;
      }

      case "skills":
        addMany([
          { c:"blank",   text:"" },
          { c:"amber",   text:"  TECHNICAL EXPERTISE" },
          { c:"dim",     text:"  " + "─".repeat(48) },
          { c:"ok",      text:"  Robotics Systems Engineering" },
          { c:"dim",     text:"    sensor fusion · control systems · real-time pipelines" },
          { c:"ok",      text:"  Embedded Intelligence" },
          { c:"dim",     text:"    on-device inference · deterministic behavior · constrained compute" },
          { c:"ok",      text:"  C++ & Systems Programming" },
          { c:"dim",     text:"    performance critical · DSA · algorithmic design" },
          { c:"ok",      text:"  Optimization Algorithms" },
          { c:"dim",     text:"    CMA-ES · parameter variation · simulation-driven validation" },
          { c:"ok",      text:"  Applied Machine Learning" },
          { c:"dim",     text:"    computer vision · Whisper · production ML integration" },
          { c:"ok",      text:"  Full-Stack Architecture" },
          { c:"dim",     text:"    MERN · real-time APIs · auth · scalable backend" },
          { c:"blank",   text:"" },
        ]);
        break;

      case "contact":
        addMany([
          { c:"blank",   text:"" },
          { c:"amber",   text:"  CONTACT & LINKS" },
          { c:"default", text:"  GitHub     github.com/dkrdante" },
          { c:"default", text:"  LinkedIn   linkedin.com/in/dkrdante" },
          { c:"default", text:"  Company    osodyn.in" },
          { c:"default", text:"  Email      dkrdante@gmail.com" },
          { c:"blank",   text:"" },
        ]);
        break;

      case "clear": setLines([]); break;

      case "matrix":
        add("info", "  initiating matrix protocol…");
        setTimeout(doMatrix, 300);
        break;

      case "date":
        add("default", "  " + new Date().toLocaleString("en-GB", { timeZone:"Asia/Kolkata", hour12:false }));
        break;

      case "pwd":
        add("blue", "  /home/yash/portfolio");
        break;

      case "uname":
        add("dim", "  YashOS 3.14.1 portfolio #1 SMP 2026 x86_64");
        break;

      case "sudo":
        add("error", "  sudo: access denied. This is a portfolio, not a root shell.");
        break;

      default:
        add("error", `  command not found: ${cmd}  —  type help`);
    }
  }, [add, addMany, router, doMatrix]);

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { run(val); setVal(""); setHints([]); }
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      const i = Math.min(hi + 1, hist.length - 1);
      setHi(i); setVal(hist[i] ?? "");
    }
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      const i = Math.max(hi - 1, -1);
      setHi(i); setVal(i < 0 ? "" : hist[i] ?? "");
    }
    else if (e.key === "Tab") {
      e.preventDefault();
      const m = CMDS.filter(c => c.startsWith(val));
      if (m.length === 1) { setVal(m[0] + " "); setHints([]); }
      else if (m.length > 1) setHints(m);
    }
    else if (e.ctrlKey && e.key === "l") { e.preventDefault(); setLines([]); }
    else if (e.ctrlKey && e.key === "c") { e.preventDefault(); add("cmd", `  ❯  ${val}^C`); setVal(""); }
  };

  return (
    <div className={styles.shell} onClick={() => ready && inputRef.current?.focus()}>
      {matrixOn && <canvas ref={canvasRef} className={styles.matrix} />}

      <div className={styles.output}>
        {lines.map(l => (
          <div key={l.id} className={`${styles.line} ${styles[l.c]}`}>
            {l.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {ready && (
        <>
          {hints.length > 0 && (
            <div className={styles.hints}>
              {hints.map(h => <span key={h} className={styles.hint}>{h}</span>)}
            </div>
          )}
          <div className={styles.inputRow}>
            <span className={styles.pUser}>yash</span>
            <span className={styles.pSep}>@</span>
            <span className={styles.pHost}>portfolio</span>
            <span className={styles.pSep}>:</span>
            <span className={styles.pPath}>~</span>
            <span className={styles.pSymbol}>❯</span>
            <input
              ref={inputRef}
              className={styles.input}
              value={val}
              onChange={e => { setVal(e.target.value); setHints([]); }}
              onKeyDown={onKey}
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
            <span className={styles.caret} />
          </div>
        </>
      )}
    </div>
  );
}

function sleep(ms: number) { return new Promise(r => setTimeout(r, ms)); }
