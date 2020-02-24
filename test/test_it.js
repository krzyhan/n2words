const assert = require('assert');
const n2words = require('../index.js');

const testCasesItalian = [
  [0, 'zero'],
  [1, 'uno'],
  [2, 'due'],
  [3, 'tre'],
  [11, 'undici'],
  [12, 'dodici'],
  [16, 'sedici'],
  [19, 'diciannove'],
  [20, 'venti'],
  [21, 'ventuno'],
  [26, 'ventisei'],
  [28, 'ventotto'],
  [30, 'trenta'],
  [31, 'trentuno'],
  [40, 'quaranta'],
  [44, 'quarantaquattro'],
  [50, 'cinquanta'],
  [55, 'cinquantacinque'],
  [60, 'sessanta'],
  [67, 'sessantasette'],
  [70, 'settanta'],
  [79, 'settantanove'],
  [89, 'ottantanove'],
  [95, 'novantacinque'],
  [100, 'cento'],
  [101, 'centouno'],
  [121, 'centoventuno'],
  [199, 'centonovantanove'],
  [203, 'duecentotré'],
  [287, 'duecentottantasette'],
  [356, 'trecentocinquantasei'],
  [400, 'quattrocento'],
  [421, 'quattrocentoventuno'],
  [434, 'quattrocentotrentaquattro'],
  [578, 'cinquecentosettantotto'],
  [689, 'seicentottantanove'],
  [729, 'settecentoventinove'],
  [894, 'ottocentonovantaquattro'],
  [999, 'novecentonovantanove'],
  [1000, 'mille'],
  [1001, 'milleuno'],
  [1021, 'milleventuno'],
  [1097, 'millenovantasette'],
  [1104, 'millecentoquattro'],
  [1121, 'millecentoventuno'],
  [1243, 'milleduecentoquarantatré'],
  [2385, 'duemilatrecentottantacinque'],
  [3766, 'tremilasettecentosessantasei'],
  [4196, 'quattromilacentonovantasei'],
  [5846, 'cinquemilaottocentoquarantasei'],
  [6421, 'seimilaquattrocentoventuno'],
  [6459, 'seimilaquattrocentocinquantanove'],
  [7232, 'settemiladuecentotrentadue'],
  [8569, 'ottomilacinquecentosessantanove'],
  [9539, 'novemilacinquecentotrentanove'],
  [21747, 'ventunomilasettecentoquarantasette'],
  [27821, 'ventisettemilaottocentoventuno'],
  [1000000, 'un milione'],
  [1000000000, 'un miliardo'],
  [1000001, 'un milione e uno'],
  [4000000, 'quattro milioni'],
  [10000000000000, 'dieci bilioni'],
  [100000000000000, 'cento bilioni'],
  [1000000000000000000, 'un trilione']
]

describe('Italian', function () {
  it('should convert numbers correctly (Italian)', function () {
    for (let i = 0; i < testCasesItalian.length; i++) {
      assert.equal(n2words(testCasesItalian[i][0], { lang: 'it' }), testCasesItalian[i][1])
    }
  });
});
