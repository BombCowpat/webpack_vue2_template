module.exports = function (content, map, meta) {
  const callback = this.async()
  setTimeout(() => {
    callback(null, content)
  }, 1000);
}