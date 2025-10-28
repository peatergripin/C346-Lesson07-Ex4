import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.Parent}>
      <View style={[styles.Child, { backgroundColor: "lightblue" }]}>
        <Text>Square 1</Text>
      </View>
      <View style={[styles.Child, { backgroundColor: "lightgreen" }]}>
        <Text>Square 2</Text>
      </View>
      <View style={[styles.Child, { backgroundColor: "coral" }]}>
        <Text>Square 3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Parent: {
    backgroundColor: "whitesmoke",
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center",
  },
  Child: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
