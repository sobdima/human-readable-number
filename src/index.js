module.exports = function toReadable (number) {
  //const arr = String(number).split('');
  const str = String(number);
  let result = '';

  const oneDigit = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '0': 'zero',
  };

  const specialDigit = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
  };

  const twoDigit = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
  };

  function units() {
    result = oneDigit[str[0]];
  }

  function tens() {
    if (str[0] === '1') {
      result = specialDigit[str];
    } else if (str[1] === '0') {
      result = twoDigit[str[0]];
    } else { result = twoDigit[str[0]] + ' ' + oneDigit[str[1]] }
  }

  function hundreds() {
    if (str[1] === '0' && str[2] === '0') {
      result = oneDigit[str[0]] + ' hundred'
    } else if (str[1] === '1') {
      result = oneDigit[str[0]] + ' hundred ' + specialDigit[str.slice(1)]
    } else if (str[2] === '0') {
      result = oneDigit[str[0]] + ' hundred ' + twoDigit[str[1]]
    } else if (str[1] === '0') {
      result = oneDigit[str[0]] + ' hundred ' + oneDigit[str[2]]
    } else {
      result = oneDigit[str[0]] + ' hundred ' + twoDigit[str[1]] + ' ' + oneDigit[str[2]]
    }
  }

  switch (str.length) {
    case 1 : units();
    break;

    case 2 : tens();
    break;

    case 3 : hundreds();
    break;
  }

  return result
}