# Base image
FROM node:20-alpine AS base
WORKDIR /usr/src/app

# Install dependencies
FROM base AS dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the application
FROM base AS build
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN yarn build

# Production image
FROM base AS production
ENV NODE_ENV=production
USER node
COPY --chown=node:node --from=dependencies /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
COPY --chown=node:node package.json yarn.lock ./

EXPOSE 4200

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
