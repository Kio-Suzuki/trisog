-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tours" (
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
INSERT INTO "new_Tours" ("country", "createdAt", "days", "id", "image", "location", "price", "review", "title", "updatedAt") SELECT "country", "createdAt", "days", "id", "image", "location", "price", "review", "title", "updatedAt" FROM "Tours";
DROP TABLE "Tours";
ALTER TABLE "new_Tours" RENAME TO "Tours";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
