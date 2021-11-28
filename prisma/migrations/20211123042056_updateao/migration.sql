/*
  Warnings:

  - You are about to drop the column `kaedco_code` on the `AreaOffice` table. All the data in the column will be lost.
  - You are about to drop the column `nerc_code` on the `AreaOffice` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nercCode]` on the table `AreaOffice` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[kaedcoCode]` on the table `AreaOffice` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `kaedcoCode` to the `AreaOffice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nercCode` to the `AreaOffice` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "AreaOffice_id_name_nerc_code_kaedco_code_idx";

-- DropIndex
DROP INDEX "AreaOffice_kaedco_code_key";

-- DropIndex
DROP INDEX "AreaOffice_nerc_code_key";

-- AlterTable
ALTER TABLE "AreaOffice" DROP COLUMN "kaedco_code",
DROP COLUMN "nerc_code",
ADD COLUMN     "kaedcoCode" TEXT NOT NULL,
ADD COLUMN     "nercCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Designation" ADD COLUMN     "description" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "AreaOffice_nercCode_key" ON "AreaOffice"("nercCode");

-- CreateIndex
CREATE UNIQUE INDEX "AreaOffice_kaedcoCode_key" ON "AreaOffice"("kaedcoCode");

-- CreateIndex
CREATE INDEX "AreaOffice_id_name_idx" ON "AreaOffice"("id", "name");
