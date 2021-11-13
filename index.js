// Adds the scrollspy plugin so the navbar can dynamically change according to the user's position on the webpage
$('body').scrollspy({ target: '#navbar' });

// Initialize carousel component
$('#dachshund-images').carousel({
  interval: 2000
});

// AJAX call to Unsplash images to get an image
function getImg( imgIndex ) {
  var url = 'https://api.unsplash.com/search/photos?client_id=mrVu41HQ8xQCfIOatFRDu7GbgCKYFPcig_VLDlMZYzI&orientation=landscape&query=dachshund';
  $.get( url )
    .done( function( data ) {
      let imgUrl = data.results[imgIndex].urls.regular;
      let altText = data.results[imgIndex].alt_description;

      console.log(imgUrl)
      console.log(altText)

      changeImg(imgUrl, altText);
    });
}

// use jquery to change the img src and alt
function changeImg( imgUrl, altText ) {
  console.log("change img")
  $("#head-img").attr({
    src: imgUrl,
    alt: altText
  });
  $("#head-cap").html(altText);
}

// recursive timer function to cycle through all of our images
function timer(index) {
  let imgIndexes = [2, 5, 6, 7, 8];

  if (index < imgIndexes.length) {

    getImg( imgIndexes[index] );

    setTimeout(function() {
      index++;
      timer(index);
    }, 20000);
  }
}

// initiate our timer on document load
$( document ).ready( function() {
  timer(0);
});