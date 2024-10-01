FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

ENV NEXTAUTH_SECRET=your_generated_secret_here

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]