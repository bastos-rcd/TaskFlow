import { COLORS } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  id: string;
  title: string;
  category: string;
  status: boolean;
}

export default function TaskCard({ task }: { task: Props }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.title}>{task.title}</Text>
        <Text style={styles.category}>{task.category}</Text>
      </View>

      <Text style={{ ...styles.status, color: task.status ? "green" : "grey" }}>
        {task.status ? "Terminé" : "À faire"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    gap: 10,
    padding: 15,
    width: "100%",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    width: "75%",
  },
  category: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.accent,
    borderRadius: 8,
    color: COLORS.text,
    fontSize: 12,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
