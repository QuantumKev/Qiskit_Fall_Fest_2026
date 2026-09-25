"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Mode = "participant" | "facilitator";

export type Survey = {
  python: string;
  qiskit: string;
  ibm: string;
  math: string;
};

type Store = {
  ready: boolean;
  mode: Mode;
  setMode: (mode: Mode) => void;
  done: string[];
  toggleDone: (slug: string) => void;
  markDone: (slug: string) => void;
  survey: Survey;
  saveSurvey: (survey: Survey) => void;
};

const emptySurvey: Survey = { python: "", qiskit: "", ibm: "", math: "" };

const ProgressContext = createContext<Store | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [mode, setModeState] = useState<Mode>("participant");
  const [done, setDone] = useState<string[]>([]);
  const [survey, setSurvey] = useState<Survey>(emptySurvey);

  useEffect(() => {
    const storedMode = localStorage.getItem("qff-mode");
    if (storedMode === "participant" || storedMode === "facilitator") {
      setModeState(storedMode);
    }
    try {
      const parsed = JSON.parse(localStorage.getItem("qff-progress") || "[]");
      if (Array.isArray(parsed)) {
        setDone(parsed.filter((item) => typeof item === "string"));
      }
    } catch {
      setDone([]);
    }
    try {
      const parsed = JSON.parse(localStorage.getItem("qff-survey") || "null");
      if (parsed && typeof parsed === "object") {
        setSurvey({ ...emptySurvey, ...parsed });
      }
    } catch {
      setSurvey(emptySurvey);
    }
    setReady(true);
  }, []);

  function setMode(next: Mode) {
    setModeState(next);
    localStorage.setItem("qff-mode", next);
  }

  function toggleDone(slug: string) {
    setDone((current) => {
      const next = current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug];
      localStorage.setItem("qff-progress", JSON.stringify(next));
      return next;
    });
  }

  function markDone(slug: string) {
    setDone((current) => {
      if (current.includes(slug)) return current;
      const next = [...current, slug];
      localStorage.setItem("qff-progress", JSON.stringify(next));
      return next;
    });
  }

  function saveSurvey(next: Survey) {
    setSurvey(next);
    localStorage.setItem("qff-survey", JSON.stringify(next));
  }

  return (
    <ProgressContext.Provider value={{ ready, mode, setMode, done, toggleDone, markDone, survey, saveSurvey }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }
  return value;
}
