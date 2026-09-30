const STORAGE_KEY = "addiseats_menu";

export async function loadDishes() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      const parsed = JSON.parse(saved);

      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  const response = await fetch("/data/menu.json");

  if (!response.ok) {
    throw new Error("Failed to load menu");
  }

  const data = await response.json();

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );

  return data;
}