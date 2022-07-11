const fs = require ('fs');

fs.writeFileSync ('./.env', `API = ${precess.env.API}\n`);