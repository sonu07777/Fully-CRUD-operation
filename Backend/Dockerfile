# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]

# Use official Node.js image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies inside container
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm", "start"] 