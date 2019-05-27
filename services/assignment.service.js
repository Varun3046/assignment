var Q = require('q');
var mongo = require('mongoskin');
var MongoClient = require('mongodb').MongoClient;
const url ="mongodb://apiguy:api0659@ds019846.mlab.com:19846/assignment_apis";
var dbo;
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log(db);
 dbo = db.db("assignment_apis")
});

var service = {};
// db.use("tbl_user")
service.apione = apione;
// service.apitwo = apitwo;
// service.rechargeDB = rechargeDB;
module.exports = service;
function apione()
{
    var deferred = Q.defer()
    dbo.collection("tbl_user").find(
        [
            {    $lookup: 
                         {
                         from: "tbl_order",
                         localField:"userId",
                         foreignField: "userId",
                         as: "item"
                        }
            },
            {   $unwind:"$item" },
     
            {
                $group:
                {   
                     _id: 1,
                    totalAmount: { $avg:   "$item.subtotal"  },
                    count: { $sum: 1 }
                }
            }
        ],function(err,request){
            if (err) deferred.reject(err.name + ': ' + err.message);
            console.log(err)
            if(request){
                console.log(request)
                deferred.resolve(request)
            }
            else{
                deferred.reject()
            }

        }
     )
     
     

    return deferred.promise;
}
function addUser(user){

    var deferred =Q.defer()
    dbo.collection("tbl_user").insertMany(
        [{
            "userId" :3,
            "name" : "Victor"
        },
        {
            "userId" :4,
            "name" : "Ram"
        },
        {
            "userId" :5,
            "name" : "Shyam"
        },
        ],
        function (err, doc) {
            console.log(doc)
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve(doc);
        });
// }

return deferred.promise;
}