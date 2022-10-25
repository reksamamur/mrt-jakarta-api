FROM node:16-alpine as base

COPY package*.json ./

RUN npm install

COPY src ./src
COPY tsconfig*.json ./

RUN npm run build

FROM gcr.io/distroless/nodejs:16
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

EXPOSE 8000
CMD ["dist/index.js"]