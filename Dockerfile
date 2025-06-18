# Use official Node.js Alpine base image
FROM node:19-alpine

# Set environment variables
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# Create and set working directory
RUN mkdir -p /home/app
WORKDIR /home/app

# Copy package files first for layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files to the working directory (except those ignored in .dockerignore)
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Start the application
CMD ["node", "server/start.js"]
