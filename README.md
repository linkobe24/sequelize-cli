# sequelize-cli
## Connection to a MSSQL DB created through sequelize.
### steps until now
1. initate an npm package
2. Install dependencies -> express, sequelize, tedious (for mssql), dotenv
3. install dev-dependencies -> nodemon, sequelize-cli
4. create an express server
5. create a sequelize object and sync it
6. initiate sequelize-cli -> npx sequelize-cli -> this will create the folders and files for config, migrations, models and seeders
7. specify the path of those folders (.sequelizerc)  read documentation
8. create models throug sequelize-cli -> npx sequelize-cli model:generate --name: model_name --attributes: attribute_name1:attribute_type,attribute_name2:attribute_type, etc
9. to create the models on the DB (not by migration) you need to linked the models to the sequelize object
```
  ex. 
      //lets asume you have created a db.js file in which you created a sequlieze object 
        const { Sequelize, DataTypes} = requiere('sequelize');
        const db = {};
        
        db.connection = new Sequelize() -> read documentation
      //in the same file you can linked the models created before
      
      db.model_name = require('path to the model')(db.connection, DataTypes)
```
10. Create the controllers for the models
11. Add the controllers to the routes
