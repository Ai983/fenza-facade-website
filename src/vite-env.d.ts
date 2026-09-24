/// <reference types="vite/client" />

interface LenisLike {
  scrollTo: (target: number | string, opts?: { immediate?: boolean }) => void;
}

interface Window {
  prerenderReady?: boolean;
  __lenis?: LenisLike;
}

interface ImportMetaEnv {
  readonly VITE_ENQUIRY_ENDPOINT?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
