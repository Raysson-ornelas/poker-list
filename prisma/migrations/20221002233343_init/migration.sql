-- AlterTable
ALTER TABLE "Tournaments" ADD COLUMN "ownerId" TEXT;

-- UpdateData - Add default owner value to existing homes
UPDATE "Tournaments" SET "ownerId" = 'cl8ryme5s0012qt935u6mzmfj' WHERE "ownerId" IS NULL;

-- AlterColumn - Change ownderId to a required column */
ALTER TABLE "Tournaments" ALTER COLUMN "ownerId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournaments" ADD CONSTRAINT "Tournaments_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
