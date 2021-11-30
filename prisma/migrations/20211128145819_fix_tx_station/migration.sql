/*
  Warnings:

  - You are about to drop the column `State` on the `Station` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nercCode]` on the table `Station` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[kaedcoCode]` on the table `Station` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `areaOfficeId` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kaedcoCode` to the `Station` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nercCode` to the `Station` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StationType" AS ENUM ('TRANSMISSION', 'INJECTION_SUBSTATION');

-- AlterTable
ALTER TABLE "Station" DROP COLUMN "State",
ADD COLUMN     "areaOfficeId" TEXT NOT NULL,
ADD COLUMN     "kaedcoCode" TEXT NOT NULL,
ADD COLUMN     "nercCode" TEXT NOT NULL,
ADD COLUMN     "stationType" "StationType" NOT NULL DEFAULT E'INJECTION_SUBSTATION';

-- CreateIndex
CREATE UNIQUE INDEX "Station_nercCode_key" ON "Station"("nercCode");

-- CreateIndex
CREATE UNIQUE INDEX "Station_kaedcoCode_key" ON "Station"("kaedcoCode");

-- AddForeignKey
ALTER TABLE "Station" ADD CONSTRAINT "Station_areaOfficeId_fkey" FOREIGN KEY ("areaOfficeId") REFERENCES "AreaOffice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
