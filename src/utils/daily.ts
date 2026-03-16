export const getDailySeed = () => {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
};

export const getDailyLevelId = () => {
  const seed = getDailySeed();
  // Use the seed to pick a level from the 100 levels, or generate a unique one
  return (seed % 100) + 1;
};