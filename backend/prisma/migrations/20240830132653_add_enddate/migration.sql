/*
  Warnings:

  - You are about to drop the column `initialDate` on the `tours` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `tours` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,
    "days" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "maxPeople" INTEGER NOT NULL,
    "minAge" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_tours" ("continent", "country", "createdAt", "days", "id", "image", "latitude", "location", "longitude", "maxPeople", "minAge", "overview", "price", "title", "type", "updatedAt") SELECT "continent", "country", "createdAt", "days", "id", "image", "latitude", "location", "longitude", "maxPeople", "minAge", "overview", "price", "title", "type", "updatedAt" FROM "tours";
DROP TABLE "tours";
ALTER TABLE "new_tours" RENAME TO "tours";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
