export default () => {
    console.log('meow');

    const renderHeroBg = () => {
        const heroBgElW = 120
        const heroBgElH = 120
        const heroBgRG = 15
        const heroBgCG = 40
        const timeInSecPer1BgEl = 10;
        addAnim(heroBgElW, heroBgCG)
        const heroBg = document.getElementById('hero_bg')
        const hero = document.getElementById('hero').getBoundingClientRect();
        const heroBgW = hero.width;
        const heroBgH = hero.height;
        const rowsCount = Math.ceil(heroBgH / (heroBgElH + heroBgRG))
        const colCount = Math.ceil(heroBgW / (heroBgElW + heroBgCG)) + 2

        let heroBgInner = '';
        for (let i = 0; i < rowsCount; i++) {
            heroBgInner = heroBgInner + `<div class="hero_bg_row" style='column-gap: ${heroBgCG}px; margin-top: ${heroBgRG}px' >`
            for (let j = 0; j < colCount; j++) {
                heroBgInner = heroBgInner + `<div class="hero_bg_element" style='animation: ${timeInSecPer1BgEl}s infinite linear ${i % 2 ? 'heroBgAnimLeft' : 'heroBgAnimRight'}'>
                <svg width="${heroBgElW}" height="${heroBgElH}" viewBox="0 0 170 155" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M136.367 116.412C143.65 126.63 147.082 132.055 147.082 137.714C147.082 148.89 137.768 154.309 125.22 154.309C119.689 154.309 116.119 154.302 107.095 150.119C107.095 150.119 101.249 145.351 87.5665 145.841C73.7567 145.354 67.9066 150.179 67.9066 150.179C58.8832 154.359 55.4406 154.315 49.9166 154.315C37.369 154.315 28.0478 148.902 28.0478 137.72C28.0478 132.061 31.4906 126.643 38.7695 116.418C38.7695 116.418 52.5297 96.0538 64.4533 86.4737C73.0689 79.5604 85.6307 79.5856 85.6307 79.5856H89.5059C89.5059 79.5856 102.617 79.554 110.694 86.4737C122.249 96.4014 136.367 116.415 136.367 116.412ZM56.9119 65.9675C70.0304 65.9675 80.6634 51.1992 80.6634 32.9837C80.6634 14.7683 70.0304 0 56.9119 0C43.7935 0 33.1605 14.7683 33.1605 32.9837C33.1605 51.1992 43.7935 65.9675 56.9119 65.9675ZM34.1497 97.9117C43.8183 93.9337 46.0236 79.8289 39.0709 66.4067C32.1181 52.9844 18.6451 45.3254 8.97647 49.3002C-0.692163 53.2751 -2.89392 67.383 4.0553 80.8053C11.0081 94.2275 24.4811 101.883 34.1497 97.9117ZM112.133 65.9675C125.252 65.9675 135.888 51.1992 135.888 32.9837C135.888 14.7683 125.252 0 112.133 0C99.015 0 88.382 14.7683 88.382 32.9837C88.382 51.1992 99.015 65.9675 112.133 65.9675ZM160.072 49.2971C150.4 45.3191 136.931 52.9781 129.978 66.4035C123.025 79.8289 125.231 93.9337 134.903 97.9117C144.575 101.887 158.044 94.2275 164.997 80.8053C171.95 67.383 169.745 53.2751 160.072 49.2971Z" fill="${interpolateColor("#00C375", "#48FFCA", ((100 / rowsCount) / 100) * i)}"/>
    </svg>
                </div>`
            }
            heroBgInner = heroBgInner + '</div>'
        }

        heroBg.innerHTML = heroBgInner;
        function addAnim(w, cg) {
            const style = document.createElement('style');
            style.innerHTML = `
              @keyframes heroBgAnimLeft {
                0% {
                transform: translate(0px, 0px);
                }
                100% {
                transform: translate(${heroBgCG + heroBgElW}px, 0px);
                }
              }
              @keyframes heroBgAnimRight {
                0% {
                transform: translate(0px, 0px);
                }
                100% {
                transform: translate(-${heroBgCG + heroBgElW}px, 0px);
                }
              }
            `;
            document.head.appendChild(style);
        }
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    function rgbToHex(r, g, b) {
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).padStart(6, '0')}`;
    }

    function interpolateColor(color1, color2, percentage) {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);

        const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * percentage);
        const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * percentage);
        const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * percentage);

        const clampedR = Math.min(255, Math.max(0, r));
        const clampedG = Math.min(255, Math.max(0, g));
        const clampedB = Math.min(255, Math.max(0, b));

        return rgbToHex(clampedR, clampedG, clampedB);
    }

    window.addEventListener('resize', function () {
        renderHeroBg()
    });
    renderHeroBg()
}