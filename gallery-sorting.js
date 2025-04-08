document.addEventListener('DOMContentLoaded', () => {
    const cafeFilter = document.getElementById('cafeFilter');
    const container = document.querySelector('.row');

    const cardElements = Array.from(container.querySelectorAll('.col-sm-12'));

    const cafes = cardElements.map(card => {
        const img = card.querySelector('img');
        const name = img.alt.trim();
        const cafeClass = getCafe(name);

        return {
            element: card,
            name: name,
            cafeClass: cafeClass,
        };
    });

    function applyFilter() {
        const selectedCafe = cafeFilter.value;

        let filtered = cafes;

        if (selectedCafe !== 'all') {
            filtered = filtered.filter(cafe => cafe.cafeClass === selectedCafe);
        }

        cafes.forEach(cafe => cafe.element.style.display = 'none');
        filtered.forEach(cafe => container.appendChild(cafe.element));
        filtered.forEach(cafe => cafe.element.style.display = 'block');
    }

    cafeFilter.addEventListener('change', applyFilter);
    applyFilter();

    function getCafe(name) {
        const cafes = {
            'Kavárna Továrna': 'tovarna',
            'Kafe Na Rohu': 'naRohu',
            'Láskavárna': 'laskavarna',
            'Prostor': 'prostor',
            'Nová Lucerna': 'lucerna',
            'Kavárna v Myslivně': 'myslivna',
            'Marco Polo': 'polo',
            'Kookie By Nikol': 'kookie'
        };
        return cafes[name] || 'neznamy';
    }
});
