import { NativeTabs } from "expo-router/native-tabs";

export default function AppTabs() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Accueil</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house" md="house" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
