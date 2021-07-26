window.onload = () => {
    const cardRef = document.querySelector('.card');
    const distanceRef = document.querySelector('#distance');
    const width = cardRef.clientWidth;
    const height = cardRef.clientHeight;

    function getRandomNumber(size) {
        return Math.floor(Math.random() * size)
    }

    const target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height),
    }

    cardRef.addEventListener('click', findTreasure) 

    function getDistance(e) {
        const x = e.offsetX - target.x;
        const y = e.offsetY - target.y;
        return Math.sqrt(x * x + y * y)
    }

    function getDistanceHint(distance) {
        if (distance < 10) {
            return "Hot hot hot!!!"
        } else if (distance < 20) {
            return "Hot"
        } else if (distance < 40) {
            return "Warm"
        } else if (distance < 80) {
            return "Cool"
        } else if (distance < 160) {
            return "Cold"
        } else if (distance < 320) {
            return "Freezing"
        } else {
            return "Get out of here!!!"
        }
    }

    function findTreasure(e) {
        // console.log(e);
        const distance = getDistance(e);
        const text = getDistanceHint(distance);
        distanceRef.textContent = text;

        if (distance < 8) {
            alert('Congratulations, you have found a treasure!!!!')
        }
    }
}

