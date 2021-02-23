

let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');

filterIcon.addEventListener('click', function() {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === './img/filter.svg') {
        filterIcon.setAttribute('src', './img/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', './img/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filters__category_title');
filterHeaders.forEach(function(header) {
    header.addEventListener('click', function(event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});
let filterSizes = document.querySelector('.filters__sizes');
let filterSizeWrap = document.querySelector('.filters__size_wrap');
filterSizeWrap.addEventListener('click', function() {
    filterSizes.classList.toggle('hidden');
});

