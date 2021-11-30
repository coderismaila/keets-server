/*
  Warnings:

  - You are about to drop the `TransmissionPowerTransformer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TransmissionStation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TransmissionPowerTransformer" DROP CONSTRAINT "TransmissionPowerTransformer_transmissionStationId_fkey";

-- DropTable
DROP TABLE "TransmissionPowerTransformer";

-- DropTable
DROP TABLE "TransmissionStation";

-- CreateTable
CREATE TABLE "Station" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL,
    "State" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Station_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PowerTransformer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacityKVA" REAL,
    "stationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PowerTransformer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Station_name_key" ON "Station"("name");

-- CreateIndex
CREATE UNIQUE INDEX "PowerTransformer_name_key" ON "PowerTransformer"("name");

-- AddForeignKey
ALTER TABLE "PowerTransformer" ADD CONSTRAINT "PowerTransformer_stationId_fkey" FOREIGN KEY ("stationId") REFERENCES "Station"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
