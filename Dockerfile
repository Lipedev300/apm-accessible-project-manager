# Estágio 1: Instalação de dependências
FROM oven/bun:latest AS deps
WORKDIR /app
COPY package.json bun.lockb ./
# Copiamos a pasta prisma para gerar o client durante a instalação
COPY prisma ./prisma/ 
RUN bun install --frozen-lockfile

# Estágio 2: Build da aplicação
FROM oven/bun:latest AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Gera o Prisma Client e faz o build do React Router
RUN bun x prisma generate
RUN bun run build

# Estágio 3: Produção (Imagem final leve)
FROM oven/bun:latest AS deploy
WORKDIR /app

# Copiamos apenas o necessário para rodar
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma

# Variável de ambiente para produção
ENV NODE_ENV=production

# O comando de início usando Bun
CMD ["bun", "run", "start"]