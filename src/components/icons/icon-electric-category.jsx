import Svg, { Circle, Path } from "react-native-svg"

const IconElectricCategory = (props) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={7} cy={7} r={7} fill="#2B2C34" />
    <Path
      d="M6 10.317v-.834a2.94 2.94 0 0 1-1.442-1.079A2.914 2.914 0 0 1 4 6.65c0-.417.08-.807.237-1.17.159-.365.373-.681.642-.95.27-.27.586-.484.95-.643a2.883 2.883 0 0 1 1.163-.237c.41 0 .8.08 1.166.237A3.014 3.014 0 0 1 9.762 5.48c.159.364.238.754.238 1.171 0 .656-.188 1.238-.563 1.746A3.036 3.036 0 0 1 8 9.475v.842h-.667v-.684a.848.848 0 0 1-.166.017h-.175a3.208 3.208 0 0 1-.325-.017v.684H6ZM7 9c.644 0 1.194-.228 1.65-.683a2.248 2.248 0 0 0 .683-1.65c0-.645-.227-1.195-.683-1.65A2.248 2.248 0 0 0 7 4.333c-.644 0-1.194.228-1.65.684a2.248 2.248 0 0 0-.683 1.65c0 .644.227 1.194.683 1.65A2.248 2.248 0 0 0 7 9ZM5.667 6h2.666v-.667H5.667V6ZM6.75 8.667l1-1-.417-.417.417-.417-.5-.5-1 1 .417.417-.417.417.5.5Z"
      fill="#FFFFFE"
    />
  </Svg>
)

export default IconElectricCategory
