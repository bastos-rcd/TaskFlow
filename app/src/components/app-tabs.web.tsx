import { Pressable, View, StyleSheet, Text } from "react-native";
import {
  Tabs,
  TabTrigger,
  TabTriggerSlotProps,
  TabList,
  TabSlot,
} from "expo-router/ui";
import { COLORS } from "@/styles/colors";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={styles.container} />

      <TabList style={styles.tabContainer} asChild>
        <View style={styles.listContainer}>
          <TabTrigger name="index" href="/" asChild>
            <TabButton>Accueil</TabButton>
          </TabTrigger>
        </View>
      </TabList>
    </Tabs>
  );
}

export function TabButton({
  children,
  isFocused,
  ...props
}: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <View style={[styles.tabButton, isFocused && styles.tabButtonSelected]}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    height: "100%",
    padding: 75,
  },
  tabContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    position: "absolute",
    width: "100%",
  },
  listContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  tabButton: {
    backgroundColor: "white",
    borderColor: "#e0e1e6",
    borderRadius: 25,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  tabButtonSelected: {
    backgroundColor: "#e0e1e6",
  },
  pressed: {
    opacity: 0.75,
  },
});
