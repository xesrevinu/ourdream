export default (sk) => {
  return {
    socket: sk,
    message: require('./message')(sk),
    user: require('./user')(sk)
  }
}