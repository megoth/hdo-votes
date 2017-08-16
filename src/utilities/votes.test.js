import { calculateVotes } from './votes';

describe('calculateVotes', () => {
  it('calculates correct results for example #1 from https://no.wikipedia.org/wiki/Sainte-Lagu%C3%ABs_metode', () => {
    const results = calculateVotes([
      { name: 'Parti A', votes: 340000, mandates: 0 },
      { name: 'Parti B', votes: 280000, mandates: 0 },
      { name: 'Parti C', votes: 160000, mandates: 0 },
      { name: 'Parti D', votes: 60000, mandates: 0 },
      { name: 'Parti E', votes: 15000, mandates: 0 }
    ], 7);
    expect(results[ 0 ]).toEqual({ name: 'Parti A', mandates: 3 });
    expect(results[ 1 ]).toEqual({ name: 'Parti B', mandates: 3 });
    expect(results[ 2 ]).toEqual({ name: 'Parti C', mandates: 1 });
    expect(results[ 3 ]).toEqual({ name: 'Parti D', mandates: 0 });
    expect(results[ 4 ]).toEqual({ name: 'Parti E', mandates: 0 });
  });

  // Må regne med utjevningsmandat på et vis..........
  it('calculates correct results for example #2 from https://no.wikipedia.org/wiki/Sainte-Lagu%C3%ABs_metode', () => {
    const results = calculateVotes([
      { name: 'AP', votes: 113103, mandates: 0 },
      { name: 'SV', votes: 33205, mandates: 0 },
      { name: 'R', votes: 12917, mandates: 0 },
      { name: 'Sp', votes: 3126, mandates: 0 },
      { name: 'KrF', votes: 8786, mandates: 1 },
      { name: 'V', votes: 20784, mandates: 0 },
      { name: 'H', votes: 69999, mandates: 0 },
      { name: 'FrP', votes: 56953, mandates: 0 }
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