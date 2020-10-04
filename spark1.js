const sparkSessionType = Java.type("org.apache.spark.sql.SparkSession");
const sparkSession = sparkSessionType.builder().master("local[*]").appName("example").getOrCreate();
const data = sparkSession.read().format("csv").option("header","true").load('/Users/mchinnappan/.snowflake/stock.csv')
data.show();


