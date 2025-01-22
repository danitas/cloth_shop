# Use the official Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Install build dependencies for Node.js
RUN apk add --no-cache python3 make g++ git

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Expose the port React will run on
EXPOSE 5173

# Command to start the React development server
CMD ["yarn", "dev"]