document.addEventListener("DOMContentLoaded", function() {
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const katakana = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*()*&^%+-/~{[|`]}';
const latin = katakana.split('');
console.log(latin)
const fontSize = 20;
const columns = canvas.width/fontSize;
console.log(columns)
const rainDrop = [];
const colors = ['#fac89e', '#e3e891', '#c2fc99', '#a3fcb3', '#92e8d5', '#96c8f2', '#ada8ff', '#ce94f7', '#ed94dd', '#fea8bb']; 
for (let x = 0; x < columns; x++) {
    rainDrop[x] = 1;
}
const draw = () => {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    ctx.font = fontSize + 'px monospace';

    for (let index = 0; index < rainDrop.length; index++) {
        text = latin[Math.floor(Math.random()*latin.length)];
        ctx.fillText(text, index * fontSize, rainDrop[index]*fontSize);
        if(rainDrop[index] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrop[index] = 0;
        }
        rainDrop[index]++;    
    }

}
setInterval(draw, 30);
});