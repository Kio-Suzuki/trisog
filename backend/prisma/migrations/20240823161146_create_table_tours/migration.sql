-- CreateTable
CREATE TABLE "Tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "review" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "price" REAL NOT NULL,
    "image" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
