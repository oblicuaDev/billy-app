const BASE_URL = `https://damp-dawn-69908-08d523d79e5b.herokuapp.com/api/`;

export const fetchStrapi = async (endpoint, method = "GET", data = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, options);

    if (res.status >= 200 && res.status < 300) {
      return await res.json();
    } else {
      throw new Error(`Error ${res.status}: ${await res.text()}`);
    }
  } catch (error) {
    console.error("Error fetching:", error.message);
    throw error;
  }
};
