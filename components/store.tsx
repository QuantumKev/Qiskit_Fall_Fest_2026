"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";

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

type Snapshot = { mode: Mode; done: string[]; survey: Survey };

const serverSnapshot: Snapshot = { mode: "participant", done: [], survey: emptySurvey };
let snapshot: Snapshot = serverSnapshot;
let loaded = false;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function readSnapshot(): Snapshot {
  const storedMode = localStorage.getItem("qff-mode");
  const mode: Mode = storedMode === "facilitator" ? "facilitator" : "participant";
  let done: string[] = [];
  try {
    const parsed = JSON.parse(localStorage.getItem("qff-progress") || "[]");
    if (Array.isArray(parsed)) done = parsed.filter((item) => typeof item === "string");
  } catch {
    done = [];
  }
  let survey = emptySurvey;
  try {
    const parsed = JSON.parse(localStorage.getItem("qff-survey") || "null");
    if (parsed && typeof parsed === "object") survey = { ...emptySurvey, ...parsed };
  } catch {
    survey = emptySurvey;
  }
  return { mode, done, survey };
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  if (!loaded) {
    loaded = true;
    snapshot = readSnapshot();
  }
  return snapshot;
}

const ProgressContext = createContext<Store | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, () => serverSnapshot);

  const setMode = useCallback((mode: Mode) => {
    snapshot = { ...getSnapshot(), mode };
    localStorage.setItem("qff-mode", mode);
    emit();
  }, []);

  const toggleDone = useCallback((slug: string) => {
    const currentDone = getSnapshot().done;
    const done = currentDone.includes(slug) ? currentDone.filter((item) => item !== slug) : [...currentDone, slug];
    snapshot = { ...getSnapshot(), done };
    localStorage.setItem("qff-progress", JSON.stringify(done));
    emit();
  }, []);

  const markDone = useCallback((slug: string) => {
    const currentDone = getSnapshot().done;
    if (currentDone.includes(slug)) return;
    const done = [...currentDone, slug];
    snapshot = { ...getSnapshot(), done };
    localStorage.setItem("qff-progress", JSON.stringify(done));
    emit();
  }, []);

  const saveSurvey = useCallback((survey: Survey) => {
    snapshot = { ...getSnapshot(), survey };
    localStorage.setItem("qff-survey", JSON.stringify(survey));
    emit();
  }, []);

  const value: Store = {
    ready: true,
    mode: current.mode,
    setMode,
    done: current.done,
    toggleDone,
    markDone,
    survey: current.survey,
    saveSurvey,
  };

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const value = useContext(ProgressContext);
  if (!value) {
    throw new Error("useProgress must be used inside ProgressProvider");
  }
  return value;
}
