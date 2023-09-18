FROM node:18-slim

WORKDIR /app
COPY . .
#COPY ["./package.json", "./tsconfig.json", "./jest.config.ts", "./tests", "/app/"]
#COPY ["./src", "/app/"]
#RUN npm install
RUN npm run test
RUN npm run build
CMD [ "node", "build/src/server.js" ]


