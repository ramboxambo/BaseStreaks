# Dockerfile

# Use the official Node.js 18 image.
FROM node:18

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json first to install dependencies.
COPY package*.json ./

# Install the dependencies.
RUN npm install

# Copy the rest of the application files.
COPY . .

# Build the application for production.
RUN npm run build

# Start the application in production mode.
CMD ["npm", "start"]