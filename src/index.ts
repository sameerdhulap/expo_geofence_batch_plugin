// Import the native module. On web, it will be resolved to ExpoGeofencingBatchPlugin.web.ts
// and on native platforms to ExpoGeofencingBatchPlugin.ts
import ExpoGeofencingBatchPluginModule from "./ExpoGeofencingBatchPluginModule";

export function getApiKey(): string {
  return ExpoGeofencingBatchPluginModule.getApiKey();
}
