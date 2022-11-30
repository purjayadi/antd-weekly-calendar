FROM node:14.15.0-alpine
WORKDIR /home/calendar
COPY . .
expose 5005