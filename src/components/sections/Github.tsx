import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
};

type ContributionDay = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

type ContributionWeek = {
  days: ContributionDay[];
};

type Year = number | 'last';

const Github = () => {
  const username = 'SamiGetu';
  const token = import.meta.env.VITE_GITHUB_TOKEN;

  const [user, setUser] = useState<GitHubUser | null>(null);
  const [contributionWeeks, setContributionWeeks] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const currentYear = new Date().getFullYear();
  const years: Year[] = ['last', ...Array.from({ length: currentYear - 2023 + 1 }, (_, i) => currentYear - i)];
  const [selectedYear, setSelectedYear] = useState<Year>('last');

  const getLevel = (count: number): 0 | 1 | 2 | 3 | 4 => {
    if (count === 0) return 0;
    if (count < 3) return 1;
    if (count < 6) return 2;
    if (count < 10) return 3;
    return 4;
  };

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(null);

        // FIX: Use exclusive end date (start of next year) to avoid missing the last day
        let dateFilters = '';
        if (selectedYear !== 'last') {
          const fromDate = `${selectedYear}-01-01T00:00:00Z`;
          const toDate = `${Number(selectedYear) + 1}-01-01T00:00:00Z`; // exclusive end — captures full year
          dateFilters = `from: "${fromDate}", to: "${toDate}"`;
        }

        const query = `
          query {
            user(login: "${username}") {
              followers { totalCount }
              following { totalCount }
              repositories(privacy: PUBLIC) { totalCount }
              contributionsCollection${dateFilters ? `(${dateFilters})` : ''} {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;

        const res = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // FIX: Use 'token' prefix — works for both classic PAT and fine-grained tokens
            Authorization: `token ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}. Check your token has read:user and repo scopes.`);
        }

        const json = await res.json();

        // FIX: Better error reporting from GraphQL layer
        if (json.errors) {
          const msg = json.errors.map((e: any) => e.message).join(', ');
          throw new Error(`GraphQL error: ${msg}`);
        }

        const userData = json?.data?.user;
        if (!userData) {
          throw new Error('No user data returned. Token may be missing read:user scope.');
        }

        setUser({
          followers: userData.followers.totalCount,
          following: userData.following.totalCount,
          public_repos: userData.repositories.totalCount,
        });

        const calendar = userData.contributionsCollection.contributionCalendar;
        setTotalContributions(calendar.totalContributions);

        const mappedWeeks: ContributionWeek[] = calendar.weeks.map((week: any) => ({
          days: week.contributionDays.map((day: any) => ({
            date: day.date,
            count: day.contributionCount,
            level: getLevel(day.contributionCount),
          })),
        }));

        setContributionWeeks(mappedWeeks);
      } catch (err: any) {
        console.error('GitHub fetch error:', err);
        setError(err.message ?? 'Unknown error');
        setTotalContributions(null);
        setContributionWeeks([]);
      } finally {
        setLoading(false);
      }
    };

    if (!token) {
      setError('VITE_GITHUB_TOKEN is not set in your .env file.');
      setLoading(false);
      return;
    }

    fetchGitHubData();
  }, [selectedYear, token]);

  const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto border-t border-black">
      <div className="border-4 border-black p-8 bg-[#f5f4f0]">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">GITHUB STATUS</h2>

          <div className="flex gap-10 mt-6 md:mt-0 text-center">
            <motion.div>
              <div className="text-4xl font-bold">{user?.public_repos ?? '--'}</div>
              <p className="text-xs uppercase">Repos</p>
            </motion.div>

            <motion.div>
              <div className="text-4xl font-bold">{user?.followers ?? '--'}</div>
              <p className="text-xs uppercase">Followers</p>
            </motion.div>

            <motion.div>
              <div className="text-4xl font-bold">{user?.following ?? '--'}</div>
              <p className="text-xs uppercase">Following</p>
            </motion.div>

            <motion.div>
              <div className="text-4xl font-bold">{totalContributions ?? '--'}</div>
              <p className="text-xs uppercase">Contributions</p>
            </motion.div>
          </div>
        </div>

        {/* ERROR BANNER */}
        {error && (
          <div className="mb-6 border-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-700 font-bold">
            ⚠ {error}
          </div>
        )}

        {/* CONTRIBUTION HEATMAP & CONTROLS */}
        <div className="border-t border-black pt-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold uppercase">Activity Map</h3>
            <select
              value={selectedYear}
              onChange={(e) => {
                const val = e.target.value;
                setSelectedYear(val === 'last' ? 'last' : Number(val));
              }}
              className="bg-transparent border-2 border-black px-4 py-2 font-bold cursor-pointer outline-none hover:bg-black hover:text-white transition-colors"
            >
              {years.map(y => (
                <option key={y} value={y} className="bg-white text-black">
                  {y === 'last' ? 'Last Year' : y}
                </option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto flex justify-center pb-4 min-h-[150px]">
            {loading ? (
              <div className="flex items-center text-sm text-gray-500 font-bold uppercase tracking-widest">
                Fetching GitHub Data...
              </div>
            ) : contributionWeeks.length > 0 ? (
              <div className="flex gap-1">
                {contributionWeeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1">
                    {week.days.length < 7 && wIndex === 0 && (
                      <div style={{ height: (7 - week.days.length) * 12 + (7 - week.days.length - 1) * 4 }} />
                    )}
                    {week.days.map((day, dIndex) => (
                      <div
                        key={dIndex}
                        data-tooltip-id="github-tooltip"
                        data-tooltip-content={`${day.count} contributions on ${day.date}`}
                        className="w-3 h-3 rounded-sm transition-opacity hover:opacity-75"
                        style={{ backgroundColor: colors[day.level] }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              !error && (
                <p className="text-sm text-gray-500 mt-8">No contributions found for this period.</p>
              )
            )}
            <Tooltip id="github-tooltip" className="z-50 font-bold text-sm" />
          </div>

          {/* LEGEND */}
          <div className="flex items-center gap-2 mt-4 justify-end text-xs text-gray-500 font-bold">
            <span>Less</span>
            {colors.map((c, i) => (
              <div key={i} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
            ))}
            <span>More</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Github;