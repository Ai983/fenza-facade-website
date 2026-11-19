/// <reference types="vite/client" />

interface LenisLike {
  scrollTo: (target: number | string, opts?: { immediate?: boolean }) => void;
}

interface Window {
  prerenderReady?: boolean;
  __lenis?: LenisLike;
}

