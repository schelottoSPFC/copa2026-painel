import { teamName, mapStatus } from './_teams.js';

export default async function handler(req, res) {
  const r = await fetch('https://api.football-data.org/v4/competitions/WC/matches', {
    headers: { 'X-Auth-Token': process.env.FOOTBALL_DATA_TOKEN }
  });
  const data = await r.json();

  const matches = (data.matches || []).map(m => ({
    home: teamName(m.homeTeam),
    away: teamName(m.awayTeam),
    status: mapStatus(m.status),
    utcDate: m.utcDate,
    score_home: m.score?.fullTime?.home ?? null,
    score_away: m.score?.fullTime?.away ?? null
  }));

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
  res.status(200).json({ matches, updated: new Date().toISOString() });
}
