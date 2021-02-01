/* global tocbot */

var toctitle = document.getElementById('toctitle');
var path = window.location.pathname;
if (toctitle !== null) {
    var oldtoc = toctitle.nextElementSibling;
    var newtoc = document.createElement('div');
    newtoc.setAttribute('id', 'tocbot');
    newtoc.setAttribute('class', 'js-toc desktop-toc');
    oldtoc.setAttribute('class', 'mobile-toc');
    oldtoc.parentNode.appendChild(newtoc);
    tocbot.init({
        contentSelector: '#content',
        headingSelector: 'h1, h2, h3, h4, h5',
        positionFixedSelector: 'body',
        fixedSidebarOffset: 90,
        smoothScroll: false
    });
    if (!path.endsWith("index.html") && !path.endsWith("/")) {
        var link = document.createElement("a");
        if (document.getElementById('index-link')) {
          indexLinkElement = document.querySelector('#index-link > p > a');
          linkHref = indexLinkElement.getAttribute("href");
          link.setAttribute("href", linkHref);
        } else {
          link.setAttribute("href", "index.html");
        }
        link.innerHTML = "<span><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></span> Back to index";
        var block = document.createElement("div");
        block.setAttribute('class', 'back-action');
        block.appendChild(link);
        var toc = document.getElementById('toc');
        var next = document.getElementById('toctitle').nextElementSibling;
        toc.insertBefore(block, next);
    }
}

var headerHtml = '<div id="header-amiga">\n' +
    '<h1>\n' +
    '<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 393.48 73.48"><defs><style>.cls-1{fill:url(#Degradado_sin_nombre_14);}</style><linearGradient id="Degradado_sin_nombre_14" x1="-500.19" y1="-658.14" x2="-106.71" y2="-658.14" gradientTransform="translate(-106.71 -621.41) rotate(180)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#096fb7"/><stop offset="1" stop-color="#8aced3"/></linearGradient></defs><title>Logotipo_AMIGA</title><path class="cls-1" d="M81.52,53.78H59L53.89,71.62h-10L65.62,1h9.5l21.53,70.6h-10ZM61.3,46h18L70.47,15.13h-.29ZM117,1l16.49,57.61h.29L150.28,1H163v70.6h-9.75V44.51l.87-27.16-.29,0-17,54.31h-6.5L113.43,17.36l-.29,0,.92,27.11V71.62h-9.75V1Zm72.82,70.6h-8.47V1h8.47Zm64.89-10a22.29,22.29,0,0,1-7.88,7.66q-5.46,3.39-13.94,3.39-11.1,0-17.89-6.74t-6.79-19.2V25.75q0-12.27,6.45-19T231.75,0q10.81,0,16.54,5.46t6.11,15.3l-.1.29H245q-.24-6.64-3.47-10.11t-9.63-3.47a12.37,12.37,0,0,0-10.18,4.64Q218,16.75,218,25.59V46.67q0,9,4,13.77a13.5,13.5,0,0,0,10.89,4.74q5,0,7.83-1.72a11,11,0,0,0,4.15-4.39V43H232.77V35.88h21.92Zm45.58-7.81h-22.5l-5.14,17.84h-10L284.36,1h9.5l21.53,70.6h-10ZM280,46h18l-8.83-30.84h-.29ZM31.21,55.87.4,41l-.4.21v7.32L34.48,66.72V57.41l-3.27-1.58ZM9.57,36.13l8.64,4.18,16.27-8V23Zm352.7,19.7L359,57.41v9.31l34.48-18.23V41.17l-.4-.21-30.8,14.91ZM359,23v9.31l16.27,8,8.64-4.18ZM330.09,73.48h-7.28L344.88,1.12h7.28Z"/></svg>'+
    '\n' +
    '\n' +
    '</h1>\n' +
    '</div>';

var header = document.createElement("div");
header.innerHTML = headerHtml;
document.body.insertBefore(header, document.body.firstChild);
