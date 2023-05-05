FROM node:alpine

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

# Copying all the files in our project
COPY . .

# Expose port
EXPOSE 3000

# Starting our application
CMD ["npm", "start"]