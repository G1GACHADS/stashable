export const Repeat = ({ n, children }) =>
  [...Array(n)].map((e, i) => children(i))

export default Repeat
