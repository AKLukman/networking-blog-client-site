
#workflow deploy to ec2

name: Deploy to EC2
 # on: [push,workflow_dispatch]
on: 
      pull_request:
        branches: [main]
          
      push:
       branches: [main]
        

jobs:
  build: 
    runs-on: ubuntu-latest
    steps:
      - name: copying the code
        uses: actions/checkout@v4
      
      - name: install nodeJs
        uses: actions/setup-node@v4
        with:
          node-version: 20.18.3
     
      - name: check node version
        run: node -v
      
      - name: install dependecies
        run: npm install --frozen-lockfile
      - name: build app
        run: npm run build

  deploy-code: 
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: copying the code
        uses: actions/checkout@v4
      
      - name: install nodeJs
        uses: actions/setup-node@v4
        with:
          node-version: 20.18.3
     
      - name: check node version
        run: node -v
      
      - name: install dependecies
        run: npm install --frozen-lockfile
      - name: build app
        run: npm run build
      - name: Configure SSH
        env: 
          SSH_PRIVATE_KEY: ${{secrets.SSH_PRIVATE_KEY}}
        run: 
          mkdir -p ~/.ssh
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H ${{secrets.EC2_HOST}} >> ~/.ssh/known_hosts
      - name: Deploy to EC2
        env: 
          EC2_HOST: ${{secrets.EC2_HOST}}
          EC2_USER: ${{secrets.EC2_USER}}
        run: |
          #create deployment dircetory
          ssh $EC2_USER@$EC2_HOST "mkdir -p ~/app"

          #copy file to EC2 instance
          rsync -avz \
            --exculude='.git' \ 
            --exculude='node_modules' \
            --exculude='.github' \
            . $EC2_USER@$EC2_HOST:~/app/
          
          #install production dependency
          ssh $EC2_USER@$EC2_HOST "cd ~/app && export PATH=$PATH:run/user/1000/fnm_multishells/1000/112424_1734077954807/bin && yarn install --frozen-lockfile"

          #stop existing pm2 process if it exists
          ssh $EC2_USER@$EC2_HOST "export PATH=$PATH:run/user/1000/fnm_multishells/1000/112424_1734077954807/bin && pm2 delete nodejs-app || true"

          #start application with pm2
          ssh $EC2_USER@$EC2_HOST "export PATH=$PATH:run/user/1000/fnm_multishells/1000/112424_1734077954807/bin && cd ~/app && pm2 start npx --name react-app -- serve -s build -l 3000"

          # ssh $EC2_USER@$EC2_HOST "export PATH=$PATH:run/user/1000/fnm_multishells/1000/112424_1734077954807/bin && cd ~/app && pm2 start dist/server.js --name nodejs-app"



        


  
