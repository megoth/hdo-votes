export function calculateMandatesForCounty(votes, mandates) {
  const results = votes.map(vote => ({
    ...vote,
    quotient: calculateQuotient(vote.votes, vote.mandates),
    mandates: vote.mandates || 0
  }));
  while (mandates > 0) {
    const nextMandateWinner = results.sort((a, b) => a.quotient < b.quotient ? 1 : -1)[0];
    nextMandateWinner.mandates += 1;
    nextMandateWinner.quotient = calculateQuotient(nextMandateWinner.votes, nextMandateWinner.mandates);
    mandates--;
  }
  return results.sort((a, b) => a.votes < b.votes ? 1 : -1).map(result => ({
    name: result.name,
    mandates: result.mandates
  }));
}

function calculateQuotient(votes, mandates = 0) {
  const denominator = mandates === 0 ? 1.4 : (2 * mandates + 1);
  return votes / denominator;
}

export function calculateMandates(votesByCounty) {

}