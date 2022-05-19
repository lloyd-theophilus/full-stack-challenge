//const sqlite = require('sqlite3').verbose();

// Import path module
const path = require("path");

// Get the location of database.sqlite file
const dbPath = path.resolve(__dirname, 'db/database.sqlite')

const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: dbPath
    },
    useNullAsDefault: true
});

//let db = new sqlite.Database(dbPath);

//db.run('DROP TABLE suppliers', function (err) { 
    //if (err) {
    //    console.log(err)
    //}
//});

knex.schema
  // Make sure no "questions" table exists
  // before trying to create new
  .hasTable("questions")
  .then((exists) => {
    if (!exists) {
      // If no "questions" table exists
      // create new, with "id", "author", "answer" 'question', columns
      // and use "id" as a primary identification
      // and increment "id" with every new record (question)
        
      return knex.schema
          .createTable('questions', table => {
            table.increments('id').primary()
            table.string('name')
          })
        .then(() => {
          // Log success message
          console.log("Table 'suppliers' created");
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`);
        });
    }
  })
  .then(() => {
    // Log success message
      console.log("done");
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`);
  });


//Log all data in "suppliers" table
knex.select('*').from('questions')
  .then(data => console.log('data:', data))
  .catch(err => console.log(err))

// Export the knex database
module.exports = knex;
