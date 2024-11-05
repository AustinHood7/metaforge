import { useQuery } from '@tanstack/react-query';
import { fetchHeroStats } from '../requests/hero';
import { HeroWinLossStats } from '@/schemas/heroSchema';

export const useHeroStats = () => {
  return useQuery<HeroWinLossStats[], Error>({
    queryKey: ['heroStats'],
    queryFn: fetchHeroStats,
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
};
