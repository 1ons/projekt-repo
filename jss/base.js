document.addEventListener("DOMContentLoaded", function () {
    // Original chart code
    const ctx = document.getElementById('priceChart');
    if (ctx) {
        const context = ctx.getContext('2d');
        
        const data = {
            labels: ['2:00 PM', '5:00 PM', '8:00 PM', '11:00 PM', '2:00 AM', '5:00 AM', '8:00 AM', '11:00 AM'],
            datasets: [{
                label: 'Цена (USD)',
                data: [0.00196, 0.00191, 0.00187, 0.00183, 0.00181, 0.00185, 0.00189, 0.00186],
                borderColor: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                borderWidth: 2,
                tension: 0.4
            }]
        };
        
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: { ticks: { color: '#fff' }, grid: { display: false } },
                y: { ticks: { color: '#fff' }, grid: { color: '#333' } }
            },
            plugins: {
                legend: { display: false }
            }
        };
        
        new Chart(context, { type: 'line', data, options });
    }
    

});