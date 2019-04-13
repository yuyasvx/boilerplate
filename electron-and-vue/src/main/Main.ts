import path from "path";
import { app, BrowserWindow } from "electron";

const HOME_URL: string = path.normalize(`${__dirname}/../.`);
const BUILT_HTML_PATH: string =
  process.env.NODE_ENV === "production"
    ? `file://${HOME_URL}/renderer/index.html#/`
    : "http://localhost:8080/#/";

app.on("ready", () => {
  const browserWindow = new BrowserWindow({
    width: 1200,
    height: 720,
    minWidth: 1200,
    minHeight: 720,
    useContentSize: true,
    fullscreenable: true,
    show: false,
    titleBarStyle: "hiddenInset",
    title: "Vue on Electron Boilerplate",
    webPreferences: { scrollBounce: false }
  });

  browserWindow.loadURL(BUILT_HTML_PATH);

  browserWindow.on("ready-to-show", () => {
    browserWindow.show();
  });
});
