var volcano = bodymovin.loadAnimation({
    container: document.getElementById('volcano'), // Required
    path: 'images/volcano.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Volcano", // Name for future reference. Optional.
  })