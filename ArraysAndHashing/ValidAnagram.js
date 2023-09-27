/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const S=s.split("").sort().toString("");
    const T=t.split("").sort().toString("");
    return S===T;
};
