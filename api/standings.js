export default async function handler(req, res) {
  const r = await fetch('https://copa2026-bolao-nine.vercel.app/api/standings');
  const data = await r.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
  res.status(200).json(data);
}
