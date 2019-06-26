function test() {
  inner();
  alert('456');
}
function inner() {
  alert('789');
}
export { test }
