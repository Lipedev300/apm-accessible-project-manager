import { PrismaClient } from "@prisma/client/extension";

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const dbUpdater =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = dbUpdater;
}