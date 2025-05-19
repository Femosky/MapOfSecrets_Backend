/*
  Warnings:

  - You are about to drop the column `cityTown` on the `CityTown` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `CityTown` table. All the data in the column will be lost.
  - You are about to drop the column `stateProvince` on the `CityTown` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `StateProvince` table. All the data in the column will be lost.
  - You are about to drop the column `stateProvince` on the `StateProvince` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `CityTown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CityTown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stateProvinceId` to the `CityTown` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `countryId` to the `StateProvince` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `StateProvince` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CityTown" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "stateProvinceId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "CityTown_stateProvinceId_fkey" FOREIGN KEY ("stateProvinceId") REFERENCES "StateProvince" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CityTown_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CityTown" ("id") SELECT "id" FROM "CityTown";
DROP TABLE "CityTown";
ALTER TABLE "new_CityTown" RENAME TO "CityTown";
CREATE UNIQUE INDEX "CityTown_name_stateProvinceId_countryId_key" ON "CityTown"("name", "stateProvinceId", "countryId");
CREATE TABLE "new_Country" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Country" ("id") SELECT "id" FROM "Country";
DROP TABLE "Country";
ALTER TABLE "new_Country" RENAME TO "Country";
CREATE TABLE "new_StateProvince" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,
    CONSTRAINT "StateProvince_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StateProvince" ("id") SELECT "id" FROM "StateProvince";
DROP TABLE "StateProvince";
ALTER TABLE "new_StateProvince" RENAME TO "StateProvince";
CREATE UNIQUE INDEX "StateProvince_name_countryId_key" ON "StateProvince"("name", "countryId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
