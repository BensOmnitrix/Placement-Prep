import { getClient } from "./utils";

async function createEntries() {
    const client = await getClient();
    const insertUserText = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const userValues = ['john.do11e@gmail2.com', 'hashed_password_here'];

    let response = await client.query(insertUserText, userValues);
    console.log(response);    // Response Object
    //     Result {
    //   command: 'INSERT',
    //   rowCount: 1,
    //   oid: 0,
    //   rows: [ { id: 1 } ],
    //   fields: [
    //     Field {
    //       name: 'id',
    //       tableID: 24578,
    //       columnID: 1,
    //       dataTypeID: 23,
    //       dataTypeSize: 4,
    //       dataTypeModifier: -1,
    //       format: 'text'
    //     }
    //   ],
    //   _parsers: [ [Function: parseInteger] ],
    //   _types: TypeOverrides {
    //     _types: {
    //       getTypeParser: [Function: getTypeParser],
    //       setTypeParser: [Function: setTypeParser],
    //       arrayParser: [Object],
    //       builtins: [Object]
    //     },
    //     text: {},
    //     binary: {}
    //   },
    //   RowCtor: null,
    //   rowAsArray: false,
    //   _prebuiltEmptyResultObject: { id: null }
    // }
    const insertTodoText = 'INSERT INTO todos (title, description, user_id, done) VALUES ($1, $2, $3, $4) RETURNING id';
    const todoValues = ['Buy groceries', 'Milk, bread, and eggs', response.rows[0].id, false];
    await client.query(insertTodoText, todoValues);

    console.log("Entries created!");
}



createEntries();