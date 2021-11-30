/*
  Warnings:

  - Made the column `stationType` on table `Station` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Station" ALTER COLUMN "stationType" SET NOT NULL,
ALTER COLUMN "stationType" SET DEFAULT E'Distribution';
