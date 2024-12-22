import GithubContributionChart from '@/components/github-contribution-chart'

export default async function ChartEmbed({
  params: { username, theme },
}: {
  params: { username: string; theme: "red" | "green" | "blue" | "purple" | "yellow" | "gray" }
}) {
  return <GithubContributionChart username={username} theme={theme} />
}
