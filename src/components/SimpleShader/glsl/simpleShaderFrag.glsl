precision mediump float;

varying vec2 vUv;

#define PI 3.141592653589

float plot(vec2 st, float pct) {

  // return step(0.2, st.y);
  // return smoothstep(0., .1, st.x);

  // return step(pct, st.x);
  return smoothstep(pct - 0.1, pct + 0.1, st.x);
  // return st.x;

  // return smoothstep(pct, pct, .5);
  // return smoothstep(pct - 0.01, pct, st.y) -
  // smoothstep(pct, pct + 0.0, st.y);
  // return smoothstep(0.02, 0.0, abs(st.y - st.x));
}

void main() {

  float y = vUv.y;
  // float y = pow(vUv.x, 5.);
  // float y = step(0.5, vUv.x);
  // float y = smoothstep(0., 1., vUv.x);

  vec3 color = vec3(y);
  float pct = plot(vUv, y);

  // color = (1.0 - pct) * color + pct * vec3(0.0, 1.0, 0.0);
  color = pct * vec3(0.0, 1.0, 0.0);

  gl_FragColor = vec4(color, 1.0);
}