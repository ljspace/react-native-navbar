import { isIphoneX } from "./lib";
import { Platform } from "react-native";

let noIOS = Platform.OS !== "ios";

const NAV_BAR_HEIGHT = noIOS ? 50 : 44;
const STATUS_BAR_HEIGHT = noIOS ? 20 : isIphoneX() ? 44 : 20;

module.exports = {
  navBarContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT
  },
  navBar: {
    flex: 1,
    height: NAV_BAR_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  customTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: "center"
  },
  navBarButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  navBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5
  },
  navBarTitleContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: "#333",
    fontWeight: "500"
  }
};
