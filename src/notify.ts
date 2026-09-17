const API_URL = "https://example.com/api/notify";

export async function notifyApi(message: string): Promise<void> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      console.error(`Notification failed: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Notification error:", error);
  }
}