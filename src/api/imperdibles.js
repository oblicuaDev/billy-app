const BASE_URL = `us-central1-idt-mobile-app-dev.cloudfunctions.net/`;

export const fetchBogota = async (endpoint) => {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    return await res.json();
  } catch (e) {
    console.log("Error fetching", e.message);
    return [];
  }
};
