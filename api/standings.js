import { teamName } from './_teams.js';

export default async function handler(req, res) {
  const r = await fetch('https://api.football-data.org/v4/competitions/WC/standings', {
    headers: { 'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN }
  });
  const data = await r.json();

  const standings = {};
  (data.standings || []).forEach(group => {
    const letter = group.group?.replace('Group ', '').trim();
    if (!letter) return;
    standings[letter] = group.table.map(row => ({
      team: teamName(row.team),
      pts: row.points,
      j: row.playedGames,
      sg: row.goalDifference
    }));
  });

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
  res.status(200).json({ standings, updated: new Date().toISOString() });
}
