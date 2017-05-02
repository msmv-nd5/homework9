var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/test", (err, db) => {
    
    db.collection('test', function (err, collection) {
        
        collection.insert([{ id: 1, name: 'Steve' }, { id: 2, mame: 'Bill' }, { id: 3, mame: 'James' }], (err, result) => {
        		collection.find().toArray((err, result) => {
        			console.log (result);
        			collection.update({id: 1}, {id: 1, name: "Ann"}, (err, result) => {
						collection.update({id: 2}, {id: 2, name: "John"}, (err, result) => {
														collection.find().toArray((err, result) => {
									        			console.log (result);
									        			collection.remove({}, (err, result) => {
									        				db.close();
									        		});				
						        			});
        			});
        		});
        });
        
      
    });          
});
});