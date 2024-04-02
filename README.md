fix errors 

npm install --legacy-peer-deps
npm audit fix --force

npm config set legacy-peer-deps true

 rm -rf node_modules

 npm install -g npm@latest and npm audit fix. 