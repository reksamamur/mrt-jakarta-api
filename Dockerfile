FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
COPY tsconfig*.json ./
COPY .env ./
RUN npm install --production
COPY . ./
RUN npm run build