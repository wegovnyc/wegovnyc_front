FROM node:20-alpine

# Set environment to production
ENV NODE_ENV=production

# Install dependencies for building native modules (like better-sqlite3, sharp)
RUN apk add --no-cache python3 make g++ vips-dev

WORKDIR /opt/app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

ENV PATH /opt/app/node_modules/.bin:$PATH

COPY . .

# Build Strapi admin panel
RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "start"]
