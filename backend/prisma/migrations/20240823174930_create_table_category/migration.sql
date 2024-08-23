/*
  Warnings:

  - You are about to drop the `Categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tours` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Categories";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tours";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "review" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__TourCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TourCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TourCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "tours" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__TourCategories" ("A", "B") SELECT "A", "B" FROM "_TourCategories";
DROP TABLE "_TourCategories";
ALTER TABLE "new__TourCategories" RENAME TO "_TourCategories";
CREATE UNIQUE INDEX "_TourCategories_AB_unique" ON "_TourCategories"("A", "B");
CREATE INDEX "_TourCategories_B_index" ON "_TourCategories"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
