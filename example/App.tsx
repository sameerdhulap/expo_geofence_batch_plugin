import * as ExpoGeofencingBatchPlugin from "expo-geofencing-batch-plugin";
import { View, Text } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>API key: {ExpoGeofencingBatchPlugin.getApiKey()}</Text>
    </View>
  );
}
