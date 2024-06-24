function render() {
    const container = document.querySelector('#container');

    const moodData = getCookie('logs');

    if (container.childElementCount == 1) {
        container.removeChild(container.lastChild);
    }
    const elem = document.createElement('div');
    elem.className = `text-center`;

    elem.innerHTML = `
    
    <div class="mood">
    <div class="moodGraph">
    <canvas id="moodChart"></canvas>
    </div>
    </div>
    `;

    container.appendChild(elem);

    if (moodData) {
        const moodArray = JSON.parse(moodData).map(item => {
            const [timestamp, moodValue] = item.split('#');
            return { timestamp: parseInt(timestamp), moodValue: parseInt(moodValue) };
        });


        populateGraph(moodArray);
    }
}

function populateGraph(data) {
    const ctx = document.getElementById('moodChart').getContext('2d');
    const labels = data.map(item => new Date(item.timestamp).toLocaleString());
    const values = data.map(item => item.moodValue);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mood',
                backgroundColor: '#700000',
                borderColor: '#700000',
                data: values,
                fill: false,
                pointBorderWidth: 3,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    display: true,
                    beginAtZero: true
                },
                x: {
                    display: true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1, cookie.length);
      }
    }
    return null;
  }

export default { render };