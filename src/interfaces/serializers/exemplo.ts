function render<T>(data: T[]) {
  return data.map((item) => ({ ...item, serializado: true }));
}

export default render;
