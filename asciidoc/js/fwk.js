$(function () {
    //Highlight. It need https://cdn.jsdelivr.net/mark.js/8.6.0/mark.min.js
    var hl = getParameterByName('hl'); 
    if (hl) {
        var markInstance = new Mark(document.querySelector("body"));
        markInstance.mark(hl, { separateWordSearch: false });
    }
    
});

function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
}
