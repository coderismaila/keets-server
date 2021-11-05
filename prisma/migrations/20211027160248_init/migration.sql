-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "officialEmail" TEXT NOT NULL,
    "personalEmail" TEXT,
    "username" TEXT NOT NULL,
    "staffId" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_officialEmail_key" ON "User"("officialEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_personalEmail_key" ON "User"("personalEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_staffId_key" ON "User"("staffId");

-- CreateIndex
CREATE INDEX "User_id_officialEmail_username_staffId_idx" ON "User"("id", "officialEmail", "username", "staffId");
