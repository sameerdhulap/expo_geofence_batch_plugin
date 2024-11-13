import { ConfigPlugin, withInfoPlist, IOSConfig } from "@expo/config-plugins";

import { ConfigProps } from "./types";
const LOCATION_USAGE = "Allow $(PRODUCT_NAME) to access your location";

const withSDKInfoPlist: ConfigPlugin<ConfigProps> = (config, props) => {
  return withInfoPlist(config, (config) => {
    delete config.modResults.woosmap;
    const {
      apiKey,
      locationAlwaysAndWhenInUsePermission,
      locationAlwaysPermission,
      locationWhenInUsePermission,
    } = props;

    // IOSConfig.Permissions.createPermissionsPlugin({
    //   NSLocationAlwaysAndWhenInUseUsageDescription: LOCATION_USAGE,
    //   NSLocationAlwaysUsageDescription: LOCATION_USAGE,
    //   NSLocationWhenInUseUsageDescription: LOCATION_USAGE,
    // })(config, {
    //   NSLocationAlwaysAndWhenInUseUsageDescription:
    //     locationAlwaysAndWhenInUsePermission,
    //   NSLocationAlwaysUsageDescription: locationAlwaysPermission,
    //   NSLocationWhenInUseUsageDescription: locationWhenInUsePermission,
    // });

    if (apiKey) {
      config.modResults.woosmap = { apiKey };
    }

    //Permission
    if (!Array.isArray(config.modResults.UIBackgroundModes)) {
      config.modResults.UIBackgroundModes = [];
    }
    if (!config.modResults.UIBackgroundModes.includes("location")) {
      config.modResults.UIBackgroundModes.push("location");
    }
    if (
      !config.modResults.NSLocationAlwaysAndWhenInUseUsageDescription &&
      locationAlwaysAndWhenInUsePermission
    ) {
      config.modResults.NSLocationAlwaysAndWhenInUseUsageDescription =
        locationAlwaysAndWhenInUsePermission;
    }

    if (
      !config.modResults.NSLocationAlwaysUsageDescription &&
      locationAlwaysPermission
    ) {
      config.modResults.NSLocationAlwaysUsageDescription =
        locationAlwaysPermission;
    }

    if (
      !config.modResults.NSLocationWhenInUseUsageDescription &&
      locationWhenInUsePermission
    ) {
      config.modResults.NSLocationWhenInUseUsageDescription =
        locationWhenInUsePermission;
    }

    return config;
  });
};

export const withIOSSdk: ConfigPlugin<ConfigProps> = (config, props) => {
  config = withSDKInfoPlist(config, props);
  //   config = withSDKEntitlements(config, props);
  //   config = withSDKXcodeProject(config, props);
  //   config = withSDKDangerousMod(config, props);
  return config;
};
