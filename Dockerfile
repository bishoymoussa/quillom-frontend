# build environment
FROM node:10-alpine as builder
RUN mkdir /app/frontend
WORKDIR /app/frontend
COPY package.json /app/frontendpackage.json
RUN npm install --silent

COPY . /app/frontend
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine

COPY --from=builder /app/frontend/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]