# Use an official Node.js runtime as the base image
FROM node:16.20.0

# Set the working directory in the container
WORKDIR .

# Copy the rest of your application code to the container
COPY . .

# Install project dependencies
RUN npm install --legacy-peer-deps

# Expose the port your app is running on (typically 3000 for React)
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]
