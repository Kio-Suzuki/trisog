/*
  Warnings:

  - You are about to drop the column `review` on the `tours` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "reviews" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comment" TEXT NOT NULL,
    "services" INTEGER NOT NULL,
    "locations" INTEGER NOT NULL,
    "amenities" INTEGER NOT NULL,
    "prices" INTEGER NOT NULL,
    "food" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "overall" REAL NOT NULL,
    "userId" TEXT NOT NULL,
    "tourId" INTEGER NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "reviews_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tours" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "continent" TEXT NOT NULL,
    "title" TEXT NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
