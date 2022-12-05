const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
const angle = Math.PI / 4;

const draw = (len, angle, multiplier) => {
  if (len < 1) return;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.strokeStyle = 'green';
  ctx.stroke();
  ctx.translate(0, -len);
  ctx.rotate(angle);
  ctx.save();
  draw(len * 0.67, angle, multiplier);
  ctx.restore();
  ctx.rotate(-angle * multiplier);
  draw(len * 0.67, angle, multiplier);
}
// ctx.translate(innerWidth/2, innerHeight);
// draw(256, angle);

const prev = {x: undefined, y: undefined};
window.addEventListener('mousemove', (e) => {
  if (e.buttons) {
    ctx.resetTransform();
    ctx.beginPath();
    ctx.moveTo(prev.x, prev.y);
    ctx.lineTo(e.x, e.y);
    ctx.stroke();
    prev.x = e.x;
    prev.y = e.y;
    ctx.translate(e.x, e.y);
    ctx.rotate((Math.random() * 2 - 1) * Math.PI);
    draw(4 + Math.random() * 16, angle, Math.random() * 2);
  } else {
    prev.x = undefined;
    prev.y = undefined;
  }
})