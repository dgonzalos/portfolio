export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/**
 * Se ejecuta en <head> antes de pintar: aplica el tema guardado o, si no hay,
 * el del sistema. Así no hay parpadeo de tema claro al cargar en oscuro.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`;
