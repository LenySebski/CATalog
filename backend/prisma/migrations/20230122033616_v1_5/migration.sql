/*
  Warnings:

  - A unique constraint covering the columns `[postedById]` on the table `Post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Post_postedById_key" ON "Post"("postedById");
