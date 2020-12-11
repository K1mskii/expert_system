let grid = new Isotope('.grid', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows',
    masonry: {
        columnWidth: 400
      }
  });
  
  let filterBtn = document.querySelectorAll('.filters-button .filter-btn');
  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].onclick = function (click) {
      click.preventDefault();
      let filterData = event.target.getAttribute('data-filter');
      grid.arrange({
        filter: filterData
      });
    };
  }