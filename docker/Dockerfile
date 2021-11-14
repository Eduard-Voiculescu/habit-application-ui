FROM node:12
MAINTAINER Eduard Voiculescu <eduard.voiculescu1@gmail.com>

# Create new user
RUN useradd -ms /bin/bash frontend

# Set as new user
USER frontend

# Set working directory
WORKDIR /home/frontend/app

# Copy package json
COPY ./package.json ./app

# Run npm install to install dependencies
RUN npm install

# Copy the entire app
COPY ./ ./

# Expose port 8080
EXPOSE 8080

# Run application
CMD npm start
