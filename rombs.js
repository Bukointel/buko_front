export default () => {
    console.log('rombs');

    const canvas = document.getElementById("backgroundCanvas");
    const ctx = canvas.getContext("2d");

    // Устанавливаем размеры Canvas
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const rombs = [];
    const rombSize = 20; // Размер ромба
    const rombCount = 100; // Количество ромбов

    // Генерация ромбов
    for (let i = 0; i < rombCount; i++) {
        rombs.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: rombSize,
            speed: Math.random() * 2 + .5, // Скорость движения
            scaleSpeed: Math.random() * 0.02 + 0.001, // Масштаб
            scale: Math.random() * 2, // Масштаб
        });
    }

    // Функция рисования одного ромба
    const drawRomb = (x, y, size, scale) => {
        ctx.beginPath();
        ctx.moveTo(x, y - size * scale); // Верхняя точка
        ctx.lineTo(x + size * scale, y); // Правая точка
        ctx.lineTo(x, y + size * scale); // Нижняя точка
        ctx.lineTo(x - size * scale, y); // Левая точка
        ctx.closePath();
        ctx.fillStyle = "rgba(0, 0, 255, .5)"; // Цвет ромба
        ctx.fill();
    };

    // Анимация
    const animate = () => {
        ctx.clearRect(0, 0, width, height); // Очищаем Canvas
        console.log('frame');

        rombs.forEach((romb) => {
            drawRomb(romb.x, romb.y, romb.size, romb.scale);

            // Обновляем положение
            romb.y -= romb.speed;
            romb.scale -= romb.scaleSpeed;

            // Если ромб вышел за пределы экрана, перезапускаем его
            if (romb.y < -romb.size || romb.scale <= 0) {
                romb.y = height + romb.size;
                romb.x = Math.random() * width;
                romb.scale = Math.random() * 2;
            }
        });

        requestAnimationFrame(animate);
    };

    animate();

}