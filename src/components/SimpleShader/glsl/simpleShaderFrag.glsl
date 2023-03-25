precision mediump float;

varying vec2 vUv;
uniform float uTime;
uniform vec2 uPointer;

#define PI 3.141592653589

float map_linear(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float rectangle(vec2 uv, float size) {

  vec2 bl = step(vec2(0.5, 0.5), uv);
  vec2 tr = step(vec2(0.1, 0.1), 1.0 - uv);

  return bl.x * bl.y * tr.x * tr.y;
}

void main() {

  vec3 color = vec3(0.0);

  float mapped = map_linear(uPointer.x, -1., 1., 0., 1.);

  color = vec3(rectangle(vUv, .1));

  gl_FragColor = vec4(color, 1.);

}
