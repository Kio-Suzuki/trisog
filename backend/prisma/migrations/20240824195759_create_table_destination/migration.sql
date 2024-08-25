-- CreateTable
CREATE TABLE "destinations" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contry" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "currency" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "timezone" TEXT NOT NULL,
    "timetravel" TEXT NOT NULL,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP
);
