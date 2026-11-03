import HomeContent from "@/components/HomeContent";
import { getContributions } from "@/lib/github";
import type { ContributionDay } from "@/components/ovio/contribution-graph/types";

function sampleContributions(): ContributionDay[] {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const data: ContributionDay[] = [];

  for (let daysAgo = 370; daysAgo >= 0; daysAgo -= 1) {
    const date = new Date(today);
    date.setUTCDate(today.getUTCDate() - daysAgo);
    const seed = (daysAgo * 17 + Math.floor(daysAgo / 7) * 13) % 23;
    data.push({
      date: date.toISOString().slice(0, 10),
      count: seed < 8 ? (seed % 4) + 1 : 0,
    });
  }

  return data;
}

export default async function Home() {
  const login = process.env.GITHUB_LOGIN ?? "Aayush4518";
  let contributions: ContributionDay[];
  let isSample = false;

  try {
    contributions = await getContributions(login);
  } catch {
    contributions = sampleContributions();
    isSample = true;
  }

  return <HomeContent contributions={contributions} isSample={isSample} />;
}
