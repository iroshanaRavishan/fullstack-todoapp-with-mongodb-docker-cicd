# Use official Node.js Alpine base image
FROM node:19-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy server-side app files
COPY server/ ./server/

# Copy frontend files to public directory inside /app
COPY public/ ./public/

# Copy environment file
COPY .env .env

# Expose port
EXPOSE 5000

# Start the application (adjust if you're using nodemon in dev)
CMD ["node", "server/start.js"]
 