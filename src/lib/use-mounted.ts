import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** Client-mount detector without setState-in-effect (eslint-clean). */
export function useMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}
