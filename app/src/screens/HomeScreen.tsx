import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TaskCard from "@/components/TaskCard";

import { COLORS } from "@/styles/colors";

const TASKS = [
  {
    id: "1",
    title: "Nettoyer la Porsche 911 GT3 RS",
    category: "Ménage",
    status: true,
  },
  {
    id: "2",
    title: "Préparer le simulateur",
    category: "Travail",
    status: false,
  },
  {
    id: "3",
    title: "Nürburgring GP GT",
    category: "Course",
    status: false,
  },
  {
    id: "4",
    title: "Podium",
    category: "Course",
    status: false,
  },
  {
    id: "5",
    title: "Laver le linge",
    category: "Ménage",
    status: true,
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TaskFlow</Text>
        <Text style={styles.subtitle}>Vos tâches du moment</Text>
      </View>

      <ScrollView contentContainerStyle={styles.tasks}>
        {TASKS.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    gap: 20,
    padding: 20,
  },
  header: {
    flexDirection: "column",
    gap: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "light",
  },
  tasks: {
    flexGrow: 1,
    gap: 10,
    width: "100%",
  },
});
