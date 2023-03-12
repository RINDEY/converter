const rates = {
  usd: 0.013,
  eur: 0.012,
};

function convert({rub, currency}) {
  if (!rates[currency]) {
    return null;
  }

  return rub * rates[currency];
};