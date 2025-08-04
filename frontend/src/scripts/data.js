import { COMPANY_LOCATION } from "../constants/constants.js";

// Translation map for prayer names
const translations = {
  Fajr: { en: "Fajr", ar: "الفجر", ha: "Asuba" },
  Sunrise: { en: "Sunrise", ar: "شروق الشمس", ha: "Fitowar Rana" },
  Dhuhr: { en: "Dhuhr", ar: "الظهر", ha: "Azahar" },
  Asr: { en: "Asr", ar: "العصر", ha: "La'asar" },
  Sunset: { en: "Sunset", ar: "غروب الشمس", ha: "Faduwar Rana" },
  Maghrib: { en: "Maghrib", ar: "المغرب", ha: "Magriba" },
  Isha: { en: "Isha", ar: "العشاء", ha: "Isha'i" },
  Imsak: { en: "Imsak", ar: "الإمساك", ha: "Imsaki" },
  Midnight: { en: "Midnight", ar: "منتصف الليل", ha: "Tsakar dare" },
  Firstthird: { en: "First Third", ar: "الثلث الأول", ha: "Bangaren Farko" },
  Lastthird: { en: "Last Third", ar: "الثلث الأخير", ha: "Bangaren Karshe" },
};

// Translate a prayer time key to multiple languages
function translatePrayerKey(key) {
  return translations[key] || { en: key, ar: key, ha: key };
}

// Get user's geolocation (Promise-based)
function getUserLocation() {
  // return new Promise((resolve, reject) => {
  //   if (!navigator.geolocation) {
  //     resolve({
  //       latitude: COMPANY_LOCATION.latitude,
  //       longitude: COMPANY_LOCATION.longitude,
  //     });
  //   }
  //   navigator.geolocation.getCurrentPosition(
  //     (pos) => {
  //       resolve({
  //         latitude: pos.coords.latitude.toFixed(2),
  //         longitude: pos.coords.longitude.toFixed(2),
  //       });
  //     },
  //     (err) => reject("Location error: " + err.message)
  //   );
  // });
  return {
    latitude: COMPANY_LOCATION.latitude,
    longitude: COMPANY_LOCATION.longitude,
  };
}

// Convert to Arabic digits
const toArabicDigits = (str) =>
  str.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[parseInt(d)]);

// Arabic time with period
function toArabicTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);

  const hour = (h % 12 || 12).toString().padStart(2, "0");
  const min = m.toString().padStart(2, "0");

  const arabic = toArabicDigits(`${hour}:${min}`);
  const suffix = h < 12 ? "صباحًا" : "مساءً";
  return `${arabic} ${suffix}`;
}

// Hausa time with period
function toHausaTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);

  const hour = (h % 12 || 12).toString().padStart(2, "0");
  const min = m.toString().padStart(2, "0");

  const suffix = h < 12 ? "na safe" : h < 19 ? "na rana" : "na dare";
  return `${`${hour}:${min}`} ${suffix}`;
}

// English 12hr time with AM/PM
function toEnglishTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);

  const hour = (h % 12 || 12).toString().padStart(2, "0");
  const min = m.toString().padStart(2, "0");

  const suffix = h >= 12 ? "PM" : "AM";
  return `${hour}:${min} ${suffix}`;
}

export async function getPrayerTimes() {
  const date = new Date();
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  const formattedDate = `${dd}-${mm}-${yyyy}`;

  try {
    const { latitude, longitude } = await getUserLocation();
    const cacheKey = `prayerTimes_${formattedDate}_${latitude}_${longitude}`;

    const cached = localStorage.getItem(cacheKey);

    if (cached) return JSON.parse(cached);

    const apiUrl = `https://api.aladhan.com/v1/timings/${formattedDate}?latitude=${latitude}&longitude=${longitude}&method=2`;
    const response = await fetch(apiUrl);
    const result = await response.json();

    const timings = result.data.timings;
    const readableDate = result.data.date.readable;

    const translatedTimings = {};
    for (const key in timings) {
      const time = timings[key];
      translatedTimings[key] = {
        name: translatePrayerKey(key),
        time: {
          en: toEnglishTime(time),
          ar: toArabicTime(time),
          ha: toHausaTime(time),
        },
      };
    }

    const finalData = {
      date: readableDate,
      timings: translatedTimings,
    };

    localStorage.setItem(cacheKey, JSON.stringify(finalData));
    return finalData;
  } catch (err) {
    console.error("Error fetching prayer times:", err);
    return new Error(err);
  }
}

// getPrayerTimes().then((data) => {
//   if (data) {
//     console.log(data);

//     console.log("📅 Date:", data.date);
//     console.log("🕋 Prayer Times:");
//     for (const [key, value] of Object.entries(data.timings)) {
//       console.log(
//         `${value.time.en} (${value.time.ar} / ${value.time.ha}): ${value.time}`
//       );
//     }
//   } else {
//     console.log("No data available.");
//   }
// });
