import { ConfigPlugin, createRunOncePlugin } from "@expo/config-plugins";

import { withAndroidSdk } from "./configWoosmapGeofenceAndroid";
import { withIOSSdk } from "./configWoosmapGeofenceiOS";
import { ConfigProps } from "./types";

const withWoosmapGeofencePlugin: ConfigPlugin<ConfigProps> = (
  config,
  _props,
) => {
  const props = _props || { apiKey: "" };
  //console.log("my custom plugin");
  config = withAndroidSdk(config, props);
  config = withIOSSdk(config, props);

  return config;
};
const pkg = require("../package.json");
export default createRunOncePlugin(
  withWoosmapGeofencePlugin,
  pkg.name,
  pkg.version,
);
