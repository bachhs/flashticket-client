FROM node:14.16-alpine3.13 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM nginx:1.19.8-alpine
COPY --from=build /app/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT [ "nginx","-g", "daemon off;" ]
