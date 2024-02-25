export function formatSubscribers(subscribersString) {
  // Extracting the number part from the string
  const subscribers = parseInt(subscribersString.split(' ')[0]);

  if (subscribers < 1000) {
    return subscribers;
  } else if (subscribers < 1000000) {
    return (subscribers / 1000).toFixed(1) + ' K';
  } else if (subscribers < 1000000000) {
    return (subscribers / 1000000).toFixed(1) + ' M';
  } else {
    return (subscribers / 1000000000).toFixed(1) + ' B';
  }
}
