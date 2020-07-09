# The version of Node to use
FROM node:12.18.0-alpine

# The path to application within the container. Making web directory as the work directory
WORKDIR /web

# Copies package.json to the Docker environment.
COPY ./package.json /web/package.json

# Installs all node packages
RUN npm install

# Installs react-scripts (can skip if in package.json)
RUN npm install react-scripts
RUN npm install react-router-dom
RUN npm install react-bootstrap
RUN npm install bootswatch
# Copies the code to the web directory in the Docker container
COPY . /web/

# Port to be exposed
EXPOSE 3003

CMD ["npm", "start"]