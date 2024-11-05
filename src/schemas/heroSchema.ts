import { z } from 'zod';

export const HeroWinLossStatsSchema = z.object({
  hero_id: z.number(),
  wins: z.number(),
  losses: z.number(),
});

export const HeroWinLossStatsArraySchema = z.array(HeroWinLossStatsSchema);

export type HeroWinLossStats = z.infer<typeof HeroWinLossStatsSchema>;
