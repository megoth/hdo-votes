import { calculateMandates, calculateMandatesForCounty } from './votes';
import { electionResults2013 } from './data';

describe('calculateMandates', () => {
  it('calculates correct results for voter results in 2013', () => {
    // https://no.wikipedia.org/wiki/Stortingsvalget_2013#Resultat_fylke_for_fylke
    const results = calculateMandates(electionResults2013);
    expect(results[0]).toEqual({ name: 'AP', mandates: 55 });
  });
});

describe('calculateMandatesForCounty', () => {
  it('calculates correct results for example #1 from the modified Sainte-Laguës method', () => {
    // https://no.wikipedia.org/wiki/Sainte-Lagu%C3%ABs_metode
    const results = calculateMandatesForCounty([
      { name: 'Parti A', votes: 340000 },
      { name: 'Parti B', votes: 280000 },
      { name: 'Parti C', votes: 160000 },
      { name: 'Parti D', votes: 60000 },
      { name: 'Parti E', votes: 15000 }
    ], 7);
    expect(results[ 0 ]).toEqual({ name: 'Parti A', mandates: 3 });
    expect(results[ 1 ]).toEqual({ name: 'Parti B', mandates: 3 });
    expect(results[ 2 ]).toEqual({ name: 'Parti C', mandates: 1 });
    expect(results[ 3 ]).toEqual({ name: 'Parti D', mandates: 0 });
    expect(results[ 4 ]).toEqual({ name: 'Parti E', mandates: 0 });
  });

  // Må regne med utjevningsmandat på et vis..........
  it('calculates correct results for example #2 from the modified Sainte-Laguës method', () => {
    // https://no.wikipedia.org/wiki/Sainte-Lagu%C3%ABs_metode
    const results = calculateMandatesForCounty([
      { name: 'AP', votes: 113103 },
      { name: 'SV', votes: 33205 },
      { name: 'R', votes: 12917 },
      { name: 'Sp', votes: 3126 },
      { name: 'KrF', votes: 8786, mandates: 1 },
      { name: 'V', votes: 20784 },
      { name: 'H', votes: 69999 },
      { name: 'FrP', votes: 56953 }
    ], 16);
    expect(results[ 0 ]).toEqual({ name: 'AP', mandates: 6 });
    expect(results[ 1 ]).toEqual({ name: 'H', mandates: 4 });
    expect(results[ 2 ]).toEqual({ name: 'FrP', mandates: 3 });
    expect(results[ 3 ]).toEqual({ name: 'SV', mandates: 2 });
    expect(results[ 4 ]).toEqual({ name: 'V', mandates: 1 });
    expect(results[ 5 ]).toEqual({ name: 'R', mandates: 0 });
    expect(results[ 6 ]).toEqual({ name: 'KrF', mandates: 1 });
    expect(results[ 7 ]).toEqual({ name: 'Sp', mandates: 0 });
  });
});