/*
  Warnings:

  - You are about to drop the column `acess_token` on the `Account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "acess_token",
ADD COLUMN     "access_token" TEXT;
