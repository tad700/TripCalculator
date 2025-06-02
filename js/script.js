document.getElementById('button').addEventListener('click', function () {
    const distance = parseFloat(document.getElementById('tripDistance').value);
    const lPer100km = parseFloat(document.getElementById('lper100km').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    if (isNaN(distance) || isNaN(lPer100km) || isNaN(fuelPrice) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        document.getElementById('tripCost').textContent = 'Trip Cost: Invalid input';
        return;
    }

    const litersNeeded = (distance / 100) * lPer100km;
    const totalCost = litersNeeded * fuelPrice;
    const costPerPerson = totalCost / numberOfPeople;

    document.getElementById('tripCost').textContent = 'Trip Cost Per Person: ' + costPerPerson.toFixed(2) + " Lv.";
});
