/*
  Warnings:

  - The values [TRANSMISSION,INJECTION_SUBSTATION] on the enum `StationType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StationType_new" AS ENUM ('Transmission', 'Distribution');
ALTER TABLE "Station" ALTER COLUMN "stationType" TYPE "StationType_new" USING ("stationType"::text::"StationType_new");
ALTER TYPE "StationType" RENAME TO "StationType_old";
ALTER TYPE "StationType_new" RENAME TO "StationType";
DROP TYPE "StationType_old";
COMMIT;
