import axios from 'axios';
import { HeroWinLossStatsArraySchema, HeroWinLossStats } from '../schemas/heroSchema';

// Fetch function for hero stats data
export const fetchHeroStats = async (): Promise<HeroWinLossStats[]> => {
    console.log('fetchHeroStats');
  const response = await axios.get('/api/stats/HeroWinLoss');
console.log('fetchHeroStats response', response);
  // Validate the response using Zod schema
  return HeroWinLossStatsArraySchema.parse(response.data);
};
