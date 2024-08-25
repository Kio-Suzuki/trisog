/*
  Warnings:

  - You are about to alter the column `area` on the `destinations` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_destinations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "area" INTEGER NOT NULL,
    "population" INTEGER NOT NULL,
    "timezone" TEXT NOT NULL,
    "timetravel" TEXT NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_destinations" ("about", "area", "country", "createdAt", "currency", "id", "img", "language", "latitude", "longitude", "population", "timetravel", "timezone", "updatedAt") SELECT "about", "area", "country", "createdAt", "currency", "id", "img", "language", "latitude", "longitude", "population", "timetravel", "timezone", "updatedAt" FROM "destinations";
DROP TABLE "destinations";
ALTER TABLE "new_destinations" RENAME TO "destinations";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
