let result = "string";

(function(){
    result = typeof arguments;
})();

console.log(result)