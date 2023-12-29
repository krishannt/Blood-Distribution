# Blood Donation Blockchain

## Node.js Installation

First, ensure you have Node.js installed. If not, you can download it from the official Node.js website: [Node.js Official Website](https://nodejs.org/)

## Project Setup

1. **Navigate to the Project Folder**: Open a terminal and navigate to the root directory of your project.

2. **Install Dependencies**: Run the following command to install project dependencies, ensuring compatibility with peer dependencies:

```
npm install --legacy-peer-deps
```

## Development and Production Servers

3. **Start Development Server**: To run the development server, use the following command:

```
npm run start
```

4. **Build for Production**: If you intend to serve your website in a production environment, build your project using:

```
npm run build
```

## Docker Setup

**Prerequisites**:
- Docker installed on your machine.

Steps for installing in Linux
```bash
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```



If you prefer running your React app inside a Docker container for isolation and portability, follow these steps:

1. **Docker Build**:
   - Build a Docker image for your React app using the following command. This command creates an image tagged as "blood-donation-blockchain" from your project's root directory where the Dockerfile is located.

```bash
sudo docker build -t blood-donation-blockchain .
```

2. **Docker Run**:
   - Start a Docker container from the built image. This command maps port 3000 in the container to port 3000 on your host system. The `-d` flag runs the container in detached mode.

```bash
sudo docker run -d -p 3000:3000 blood-donation-blockchain
```

3. **Access Your Website**:
   - Your React app is now running inside a Docker container. You can access it locally in your web browser by visiting: [http://localhost:3000](http://localhost:3000)

By following these steps, your React app will be encapsulated in a Docker container, providing portability and isolation from your host system. You can easily share and deploy the containerized application as needed.

