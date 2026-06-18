export const TLA_TO_PT = {
  MEX: "México", KOR: "Coreia do Sul", CZE: "Rep. Tcheca", RSA: "África do Sul",
  SUI: "Suíça", CAN: "Canadá", QAT: "Catar", BIH: "Bósnia",
  SCO: "Escócia", MAR: "Marrocos", BRA: "Brasil", HAI: "Haiti",
  USA: "EUA", AUS: "Austrália", TUR: "Turquia", PAR: "Paraguai",
  GER: "Alemanha", CIV: "Costa do Marfim", ECU: "Equador", CUW: "Curaçao",
  SWE: "Suécia", JPN: "Japão", NED: "Países Baixos", TUN: "Tunísia",
  NZL: "Nova Zelândia", IRN: "Irã", BEL: "Bélgica", EGY: "Egito",
  URU: "Uruguai", KSA: "Arábia Saudita", ESP: "Espanha", CPV: "Cabo Verde",
  NOR: "Noruega", FRA: "França", SEN: "Senegal", IRQ: "Iraque",
  ARG: "Argentina", AUT: "Áustria", JOR: "Jordânia", ALG: "Argélia",
  COD: "RD Congo", POR: "Portugal", COL: "Colômbia", UZB: "Uzbequistão",
  ENG: "Inglaterra", GHA: "Gana", PAN: "Panamá", CRO: "Croácia"
};

export function teamName(team) {
  return TLA_TO_PT[team.tla] || team.name;
}

export function mapStatus(status) {
  switch (status) {
    case "IN_PLAY": return "LIVE";
    case "PAUSED":
    case "SUSPENDED": return "HT";
    case "FINISHED":
    case "AWARDED": return "FT";
    default: return "NS";
  }
}
