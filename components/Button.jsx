import { Pressable } from "react-native-web";

// contoh
export function Button({ children, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={style}>
      {children}
    </Pressable>
  );
}

export default Button;
