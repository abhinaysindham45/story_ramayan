export async function translateText(text, targetLang = "en") {
  if (targetLang === "en") return text;

  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=en|${targetLang}`
    );

    if (!response.ok) {
      console.error("HTTP error:", response.status);
      return text;
    }

    const data = await response.json();

    // Access the translated text safely
    return (
      data?.responseData?.translatedText ||
      text // fallback to English if translation fails
    );
  } catch (error) {
    console.error("Translation failed:", error);
    return text;
  }
}
