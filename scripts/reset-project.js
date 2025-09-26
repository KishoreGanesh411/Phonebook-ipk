const fs = require("fs");
const path = require("path");

const appDir = path.join(process.cwd(), "app");
const featuresDir = path.join(process.cwd(), "features");
const backupDir = path.join(process.cwd(), "backup" + Date.now());

if (fs.existsSync(backupDir)) {
  throw new Error("Backup directory already exists");
}

fs.mkdirSync(backupDir);

if (fs.existsSync(appDir)) {
  fs.renameSync(appDir, path.join(backupDir, "app"));
}

if (fs.existsSync(featuresDir)) {
  fs.renameSync(featuresDir, path.join(backupDir, "features"));
}

fs.mkdirSync(appDir, { recursive: true });
fs.mkdirSync(featuresDir, { recursive: true });

console.log("Project reset complete. Previous app/features stored in:", backupDir);