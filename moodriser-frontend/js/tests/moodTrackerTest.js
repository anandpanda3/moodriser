import render from './yourFile.js';

describe('Rendering Mood Graph', () => {
  beforeAll(() => {
    Object.defineProperty(document, 'cookie', {
      value: 'logs=["1713388796959#5","1713388798332#5","1713388799868#5","1713388800323#5","1713388818069#5"]',
      writable: true
    });
  });

  test('Rendering graph with mood data', () => {
    render();

    const canvas = document.getElementById('moodChart');
    expect(canvas).toBeTruthy();
   
    const chartInstance = canvas.chart;
    expect(chartInstance.data.labels.length).toBe(5); 
    expect(chartInstance.data.datasets[0].data.length).toBe(5); 
  });
});
