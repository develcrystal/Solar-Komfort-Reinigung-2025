// Global timeout manager for mega menu hover effects
let menuTimeoutId: NodeJS.Timeout | null = null;

export const setMenuTimeout = (callback: () => void, delay: number) => {
  if (menuTimeoutId) {
    clearTimeout(menuTimeoutId);
  }
  menuTimeoutId = setTimeout(callback, delay);
};

export const clearMenuTimeout = () => {
  if (menuTimeoutId) {
    clearTimeout(menuTimeoutId);
    menuTimeoutId = null;
  }
};

export const clearMenuTimeoutAndExecute = (callback: () => void) => {
  clearMenuTimeout();
  callback();
};