const datafile = '/Users/mchinnappan/.snowflake/stock.csv';
const sparkSessionType = Java.type("org.apache.spark.sql.SparkSession");
const sparkSession = sparkSessionType.builder().master("local[*]").appName("example").getOrCreate();
const data = sparkSession.read().format("csv").option("header","true").load(datafile);
data.show();

// run on http server
const http = require("http");

http.createServer(function (request, response) {
	    response.writeHead(200, {"Content-Type": "text/html"});
	        response.end(data.schema().prettyJson());
}).listen(8000, function() { 
     console.log("Graal.js server running at http://127.0.0.1:8000/"); 
});
