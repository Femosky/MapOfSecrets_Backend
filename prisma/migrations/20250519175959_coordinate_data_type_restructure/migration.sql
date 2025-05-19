/*
  Warnings:

  - You are about to drop the column `coordinates` on the `Note` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Note` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
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
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "generalCoordinate" JSONB NOT NULL,
    "cityTownId" INTEGER NOT NULL,
    "stateProvinceId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "Note_cityTownId_fkey" FOREIGN KEY ("cityTownId") REFERENCES "CityTown" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Note_stateProvinceId_fkey" FOREIGN KEY ("stateProvinceId") REFERENCES "StateProvince" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Note_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Note" ("cityTown", "cityTownId", "country", "countryId", "createdAt", "generalCoordinate", "id", "stateProvince", "stateProvinceId", "text", "updatedAt") SELECT "cityTown", "cityTownId", "country", "countryId", "createdAt", "generalCoordinate", "id", "stateProvince", "stateProvinceId", "text", "updatedAt" FROM "Note";
DROP TABLE "Note";
ALTER TABLE "new_Note" RENAME TO "Note";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
