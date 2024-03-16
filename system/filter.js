function filterLogos() {
  var searchText = document.getElementById('search').value.toLowerCase();

  var figures = document.querySelectorAll('figure');

  figures.forEach(function(figure) {
    var logoName = figure.dataset.name.toLowerCase();
    if (logoName.includes(searchText)) {
      figure.style.display = 'block'; 
    } else {
      figure.style.display = 'none'; 
    }
  });
}

