/*
  Warnings:

  - You are about to drop the column `tourId` on the `Categories` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_TourCategories" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TourCategories_A_fkey" FOREIGN KEY ("A") REFERENCES "Categories" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TourCategories_B_fkey" FOREIGN KEY ("B") REFERENCES "Tours" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Categories" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Categories";
DROP TABLE "Categories";
ALTER TABLE "new_Categories" RENAME TO "Categories";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_TourCategories_AB_unique" ON "_TourCategories"("A", "B");

-- CreateIndex
CREATE INDEX "_TourCategories_B_index" ON "_TourCategories"("B");
