const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'confusion';

MongoClient.connect(url,(err, client) => {
    assert.equal(err,null);
    console.log('connected correctly to db');
    const db= client.db(dbname);
    const collection = db.collection('dishes');
    collection.insertOne({"name": "Uthappizza", "description": "amel"},
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);// to say the number of operation its 1
// docs is the documents of the collection
        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("dishes", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });
})