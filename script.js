function evaluateConditions() {
    const trainLength = parseFloat(document.getElementById('trainLength').value);
    const trainWeight = parseFloat(document.getElementById('trainWeight').value);
    const position = document.getElementById('position').value;

    let result = '';
    let flag = false;

    if (position === 'G') {
        if (trainLength > 700) {
            result = 'Bremsgewicht ist 5 % abzuziehen';
        }
    } else if (position === 'P') {
        if (trainWeight > 800 && trainWeight < 1201) {
            result = 'Triebfahrzeug muss im G-Stellung sein<br>';
            flag = true;
        } else if (trainWeight > 1200) {
            result = 'Triebfahrzeug und erste 5 Fahrzeuge müssen im G-Stellung sein<br>';
            flag = true;
        }

        if (trainLength >= 501 && trainLength < 601) {
            result += 'Bremsgewicht für Fahrzeuge im P-Stellung -5%<br>';
            if (flag){
                result += 'Bremsgewicht für Fahrzeuge im G-Stellung -25%<br>';
            }
        } else if (trainLength >= 601 && trainLength < 701) {
            result += 'Bremsgewicht für Fahrzeuge im P-Stellung -10%<br>';
            if (flag){
                result += 'Bremsgewicht für Fahrzeuge im G-Stellung -25%<br>';
            }
        } else if (trainLength >= 701) {
            result += 'Bremsgewicht für Fahrzeuge im P-Stellung -19%<br>';
            if (flag){
                result += 'Bremsgewicht für Fahrzeuge im G-Stellung -25% und zusätzlich -5%<br>';
            }
        }
        else {
            if (flag){
                result += 'Bremsgewicht für Fahrzeuge im G-Stellung -25%<br>';
            }
        }
    }

    document.getElementById('result').innerHTML = result;
}
