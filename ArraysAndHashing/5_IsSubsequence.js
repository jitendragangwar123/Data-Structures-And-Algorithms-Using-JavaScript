/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let index=0;
    if(s.length>t.length){
        return false;
    }
    
    for(let i=0;i<t.length;i++){
        if(s[index]==t[i]){
            index++;
        }
    }
    return index===s.length;
};
