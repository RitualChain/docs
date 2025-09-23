import { GithubInfo } from "fumadocs-ui/components/github-info";

interface GithubInfoProps {
  owner: string;
  repo: string;
//   token?: string;
}

export function GithubInfoCard({ owner, repo }: GithubInfoProps) {
  return (
    <GithubInfo 
      owner={owner} 
      repo={repo} 
    //   token={process.env.GITHUB_TOKEN}
    />
  );
}
