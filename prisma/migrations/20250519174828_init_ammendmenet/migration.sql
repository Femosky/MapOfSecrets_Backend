/*
  Warnings:

  - Added the required column `cityTown` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cityTownId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coordinates` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generalCoordinate` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateProvince` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateProvinceId` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "CityTown" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cityTown" TEXT NOT NULL,
    "stateProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StateProvince" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "stateProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "country" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Note" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "text" TEXT NOT NULL,
    "cityTown" TEXT NOT NULL,
    "stateProvince" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "coordinates" JSONB NOT NULL,
    "generalCoordinate" JSONB NOT NULL,
    "cityTownId" INTEGER NOT NULL,
    "stateProvinceId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Note_cityTownId_fkey" FOREIGN KEY ("cityTownId") REFERENCES "CityTown" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Note_stateProvinceId_fkey" FOREIGN KEY ("stateProvinceId") REFERENCES "StateProvince" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Note_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Note" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
