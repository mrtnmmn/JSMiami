function draw() {
  translate(width / 2, height / 2);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  rotate(a);
  rect(-30, -5, 60, 10);
}

