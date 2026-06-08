FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files with correct ownership
COPY --chown=node:node package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy the rest of the application files with correct ownership
COPY --chown=node:node . .

# Use non-root user
USER node

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "server.js"]
