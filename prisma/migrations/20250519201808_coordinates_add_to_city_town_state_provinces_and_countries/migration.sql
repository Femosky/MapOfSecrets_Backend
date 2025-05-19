/*
  Warnings:

  - Added the required column `latitude` to the `CityTown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `CityTown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitude` to the `StateProvince` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `StateProvince` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CityTown" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateProvinceId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    CONSTRAINT "CityTown_stateProvinceId_fkey" FOREIGN KEY ("stateProvinceId") REFERENCES "StateProvince" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CityTown_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CityTown" ("countryId", "id", "name", "stateProvinceId") SELECT "countryId", "id", "name", "stateProvinceId" FROM "CityTown";
DROP TABLE "CityTown";
ALTER TABLE "new_CityTown" RENAME TO "CityTown";
CREATE UNIQUE INDEX "CityTown_name_stateProvinceId_countryId_key" ON "CityTown"("name", "stateProvinceId", "countryId");
CREATE TABLE "new_Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL
);
INSERT INTO "new_Country" ("id", "name") SELECT "id", "name" FROM "Country";
DROP TABLE "Country";
ALTER TABLE "new_Country" RENAME TO "Country";
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");
CREATE TABLE "new_StateProvince" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    CONSTRAINT "StateProvince_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StateProvince" ("countryId", "id", "name") SELECT "countryId", "id", "name" FROM "StateProvince";
DROP TABLE "StateProvince";
ALTER TABLE "new_StateProvince" RENAME TO "StateProvince";
CREATE UNIQUE INDEX "StateProvince_name_countryId_key" ON "StateProvince"("name", "countryId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
