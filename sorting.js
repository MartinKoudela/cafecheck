
document.addEventListener('DOMContentLoaded', () => {
    const sorter = document.getElementById('sorter');
    const cityFilter = document.getElementById('cityFilter');
    const container = document.querySelector('.row');

    const cardElements = Array.from(container.querySelectorAll('.card'));

    const cafes = cardElements.map(card => {
        const title = card.querySelector('.card-title').textContent.trim();

        const cityClass = getCity(title);

        return {
            element: card,
            name: title,
            city: cityClass,
            price: getPrice(title),
            rating: getRating(title),
            popularity: getPopularity(title)
        };
    });

    function applyFilters() {
        const selectedCity = cityFilter.value;
        const selectedSort = sorter.value;

        let filtered = cafes;

        if (selectedCity !== 'all') {
            filtered = filtered.filter(cafe => cafe.city === selectedCity);
        }

        switch (selectedSort) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating-asc':
                filtered.sort((a, b) => a.rating - b.rating);
                break;
            case 'rating-desc':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'popularity-desc':
                filtered.sort((a, b) => b.popularity - a.popularity);
                break;
        }

        cafes.forEach(cafe => cafe.element.style.display = 'none');

        filtered.forEach(cafe => container.appendChild(cafe.element));
        filtered.forEach(cafe => cafe.element.style.display = 'block');
    }

    sorter.addEventListener('change', applyFilters);
    cityFilter.addEventListener('change', applyFilters);

    applyFilters();

    function getPrice(name) {
        const prices = {
            'Kavárna Továrna': 10,
            'Kafe Na Rohu': 5,
            'Láskavárna': 4,
            'Kafö': 7,
            'Kookie By Nikol': 9,
            'Kavárna v Myslivně': 8,
            'Prostor': 6,
            'Nová Lucerna': 3,
            'Marco Polo': 5
        };
        return prices[name] || 100;
    }

    function getRating(name) {
        const ratings = {
            'Kavárna Továrna': 5,
            'Kafe Na Rohu': 4.5,
            'Láskavárna': 4,
            'Kafö': 4,
            'Kookie By Nikol': 2,
            'Kavárna v Myslivně': 3,
            'Prostor': 3.5,
            'Nová Lucerna': 2.5,
            'Marco Polo': 3.4

        };
        return ratings[name] || 4.0;
    }

    function getPopularity(name) {
        const pops = {
            'Kavárna Továrna': 9,
            'Kafe Na Rohu': 10,
            'Láskavárna': 6,
            'Kafö': 7,
            'Kookie By Nikol': 8,
            'Kavárna v Myslivně': 5.2,
            'Prostor': 4,
            'Nová Lucerna': 3,
            'Marco Polo': 5

        };
        return pops[name] || 100;
    }

    function getCity(name) {
        const cities = {
            'Kavárna Továrna': 'zlin',
            'Kafe Na Rohu': 'zlin',
            'Láskavárna': 'zlin',
            'Kafö': 'zlin',
            'Kookie By Nikol': 'zlin',
            'Kavárna v Myslivně' : 'luha',
            'Prostor': 'slav',
            'Nová Lucerna': 'bojko',
            'Marco Polo': 'luha'

        };
        return cities[name] || 'zlin';
    }
});
