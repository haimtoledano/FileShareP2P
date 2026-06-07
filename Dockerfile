FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy the rest of the application files
COPY . .

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
