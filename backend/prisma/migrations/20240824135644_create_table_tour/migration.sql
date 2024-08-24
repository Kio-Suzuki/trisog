/*
  Warnings:

  - You are about to drop the `_TourCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `latitude` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxPeople` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minAge` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overview` to the `tours` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `tours` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_TourCategories_B_index";

-- DropIndex
DROP INDEX "_TourCategories_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_TourCategories";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "categories";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "review" INTEGER NOT NULL,
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
INSERT INTO "new_tours" ("country", "createdAt", "days", "id", "image", "location", "price", "review", "title", "updatedAt") SELECT "country", "createdAt", "days", "id", "image", "location", "price", "review", "title", "updatedAt" FROM "tours";
DROP TABLE "tours";
ALTER TABLE "new_tours" RENAME TO "tours";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
