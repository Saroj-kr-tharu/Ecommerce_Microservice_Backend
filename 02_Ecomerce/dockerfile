# Base Image
FROM node:18-alpine


#Working Directory Define 
WORKDIR /Ecommerce/backend/developer/backend


# Copy the package to install 
COPY package* ./

#clean install 
RUN  npm ci 

#copy all the file for the host to working directory 
COPY . .

# Expose port 8000
EXPOSE 8000

# cmd when container is on 
CMD [ "npm", "start" ]
