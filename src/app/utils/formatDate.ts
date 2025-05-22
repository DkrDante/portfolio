
export function formatDate(date?: string, includeRelative = false): string {
  const currentDate = new Date();

  // Handle undefined/null/empty input
  if (!date || typeof date !== "string") {
    return currentDate.toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  // Add time portion if it's missing
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);

  // If date is invalid, return fallback
  if (isNaN(targetDate.getTime())) {
    return "Invalid Date";
  }

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate;
}

