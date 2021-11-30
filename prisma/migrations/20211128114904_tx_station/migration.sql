-- CreateTable
CREATE TABLE "TransmissionStation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL,
    "State" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransmissionStation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransmissionPowerTransformer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "capacityKVA" REAL,
    "transmissionStationId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransmissionPowerTransformer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TransmissionStation_name_key" ON "TransmissionStation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TransmissionPowerTransformer_name_key" ON "TransmissionPowerTransformer"("name");

-- AddForeignKey
ALTER TABLE "TransmissionPowerTransformer" ADD CONSTRAINT "TransmissionPowerTransformer_transmissionStationId_fkey" FOREIGN KEY ("transmissionStationId") REFERENCES "TransmissionStation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
