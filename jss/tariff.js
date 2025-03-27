const tariffs = {
    week: [
        { old: '1 490 тг.', new: '1 200 тг.' },
        { old: '1 990 тг.', new: '1 600 тг.' },
        { old: '2 790 тг.', new: '2 200 тг.' }
    ],
    month: [
        { old: '5 990 тг.', new: '4 900 тг.' },
        { old: '7 900 тг.', new: '5 900 тг.' },
        { old: '10 900 тг.', new: '9 999 тг.' }
    ],
    '3months': [
        { old: '17 970 тг.', new: '14 400 тг.' },
        { old: '23 700 тг.', new: '18 900 тг.' },
        { old: '32 700 тг.', new: '26 200 тг.' }
    ],
    '6months': [
        { old: '35 940 тг.', new: '25 200 тг.' },
        { old: '47 400 тг.', new: '33 300 тг.' },
        { old: '65 400 тг.', new: '45 800 тг.' }
    ],
    year: [
        { old: '71 880 тг.', new: '43 200 тг.' },
        { old: '94 800 тг.', new: '56 900 тг.' },
        { old: '130 800 тг.', new: '78 500 тг.' }
    ]
};

function changePlan(plan) {
    document.querySelectorAll('.tariff-buttons5 button').forEach(btn => btn.classList.remove('active5'));
    event.target.classList.add('active5');

    const prices = tariffs[plan];
    document.querySelectorAll('.tariff-card5').forEach((card, index) => {
        card.querySelector('.old-price5').textContent = prices[index].old;
        card.querySelector('.new-price5').textContent = prices[index].new;
    });
}

changePlan('month');