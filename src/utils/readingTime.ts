import readingTime from 'reading-time';

export const getReadingTime = (content: string): number => {
  const { minutes } = readingTime(content);
  return Math.ceil(minutes);
};