import { generateDailyLevel } from '../data/levels';

export const getDailySeed = () => {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
};

export const getDailyLevel = () => {
  const seed = getDailySeed();
  return generateDailyLevel(seed);
};