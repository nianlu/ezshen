chmod 600 ezshen.pem

ssh -i ezshen.pem ubuntu@www.ezshen.com

scp -i "ezshen.pem" -r ./build ubuntu@www.ezshen.com:~/

sudo su -
cp -r /home/ubuntu/build/* /var/www/html/

DB
ezshen.c4yfq730wtde.us-east-1.rds.amazonaws.com

---
- upload s3
1. aws configure
  (use: aws keys; region: us-east-1)
2. aws s3 cp build/ s3://ezshen-web/ --recursive
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
