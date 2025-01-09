export default (bukoAnimated, delay) => {
    setTimeout(() => {
        document.getElementById('buko').src = bukoAnimated.src
    }, delay * 1000);
}