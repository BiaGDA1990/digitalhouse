function soma(a, b, cb) {
  return cb(a + b)
}
console.log(soma(5, 3, p1 => ' esse é o resultado ' + p1))
