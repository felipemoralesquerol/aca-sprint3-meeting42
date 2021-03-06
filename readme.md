## Instrucciones de instalación

npm init

npm install express

# Código fuente
Vía git 


# Perform a quick update on your instance Amazon Linux 2:
sudo yum update -y
 
# Install git in your EC2 instance
sudo yum install git -y
 
# Check git version
git version
Nota: Instalar desde este link https://cloudaffaire.com/how-to-install-git-in-aws-ec2-instance/


# Install pm2
npm install pm2@latest -g

# Ejecución básica de pm2
pm2 start index.js --name api --watch

# Ejemplo de archivo de ecosistema de pm2
ecosystem.config.js
module.exports = {
  apps: [{
    name: "api",
    script: "./index.js",
    watch: true,
    env_local: {
      "NODE_ENV": "local",
      "API_DESCRIPTION": "Estás ejecutando tu API en modo desarrollador."
    },
    env_production: {
      "NODE_ENV": "production",
    "API_DESCRIPTION": "Estás ejecutando tu API en producción. ¡¡Ten cuidado!!"
    }
  }]
};

# Ejecución de un determinado ecosistema

pm2 start ecosystem.config.js --env local

# Ejecución

node index.js

# Install nginx
sudo amazon-linux-extras install -y nginx1

# Ver archivo nginx.conf
cat /etc/nginx/nginx.conf

# Chequear nginx
nginx -t

# Recargar nginx
sudo nginx -s reload 

# Qué hacer si no puedo reinicar nginx
https://stackoverflow.com/questions/51402373/i-cant-restart-my-nginx

# Agregar compresión de archivos a nginx
gzip on;
gzip_disable "MSIE [1-6]\.(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
