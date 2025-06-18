# Use Node.js LTS version
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with --force flag as requested
RUN npm install --force

# Copy project files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 2009
EXPOSE 2009

# Start the application
CMD ["npm", "start"] 