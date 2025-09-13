# Stage 1: Build React app with Vite
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the app (Vite outputs to /dist by default)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default Nginx port)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
