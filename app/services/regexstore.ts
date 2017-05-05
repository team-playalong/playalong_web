/**
 * @ngdoc service
 * @name playalongservicesApp.regexStore
 * @description
 * # regexStore
 * Service in the playalongservicesApp.
 */
function RegexStore() {
  const regex = {
    mobile: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
    hebrew: /[\u0590-\u05e8\u05e9-\u05ff]/g,
    chord: /($|\b|<div>)((?:G,C,D|A,B,C|E,C,D)|(?:[ABCDEFG](?:#|b)?)(?:\/[ABCDEFG]b)?(?:(?:(?:maj|min|sus|add|aug|dim)(?:\d{0,2}(?:#\d{1,2}|sus\d)?)?)|(?:m\d{0,2}(?:(?:maj|add|#)\d{0,2})?)|(?:-?\d{0,2}(?:\([^)]*\)|#\d{1,2})?))?)(^|\s|&nbsp;*<\/div>|<div>|\b)/gm,
    basicChord: /^[A-G][b\#]?/,
  };

  const get = function(regexName) {
      return regex[regexName];
  };

  return {
      get,
  };
}

export default RegexStore;
