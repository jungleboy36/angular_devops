# Stage 1: Build the Angular application
FROM node:alpine3.18 AS build
# Set working directory
WORKDIR /usr/local/app
# Copy package.json and package-lock.json for npm install
COPY package.json package-lock.json /usr/local/app/
COPY . /usr/local/app/
# Install dependencies
RUN npm install
# Build the application
RUN npm run build
# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine
# Remove the existing default.conf
RUN rm /etc/nginx/conf.d/default.conf
# Copy your custom Nginx
