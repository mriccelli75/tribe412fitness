// custom.js

//Navigation Menu Toggle
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('nav').toggleClass('active');
  });
});
$(document).ready(function(){
var feed = new Instafeed ({
  get: "tagged",
  tagName: "tribe412fitness",
  clientId: "bd560cf7f761454aa6d12dd5a8223386",
  accessToken: "tribe412fitness/?426577602.1677ed0.d6e7d895c68e471e83093655204ef9ec"
});
feed.run();
});