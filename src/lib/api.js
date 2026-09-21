const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function getErrorMessage(detail) {
  if (typeof detail === "string") return detail;
  if (Array.isArray(detail)) return detail.map((item) => item.msg).filter(Boolean).join(" ") || "Please check the information you entered.";
  return "Something went wrong. Please try again.";
}

export async function apiRequest(endpoint, options = {}) {
  if (!API_BASE_URL) {
    throw new Error("The API URL has not been configured.");
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(getErrorMessage(data.detail));
  return data;
}
