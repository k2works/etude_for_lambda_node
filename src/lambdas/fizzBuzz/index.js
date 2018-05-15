import FizzBuzz from "./fizzBuzz";

console.log("Loading function");

exports.handler = function(event, context, callback) {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log("value1 =", event.key1);
    console.log("value2 =", event.key2);
    console.log("value3 =", event.key3);
    console.log("remaining time =", context.getRemainingTimeInMillis());
    console.log("functionName =", context.functionName);
    console.log("AWSrequestID =", context.awsRequestId);
    console.log("logGroupName =", context.logGroupName);
    console.log("logStreamName =", context.logStreamName);
    //callback(null, event.key1); // Echo back the first key value
    // or
    // callback("some error type");

    let fizzBuzz = new FizzBuzz();
    let result = fizzBuzz.generate(1);
    console.log("result1 =", result);
    console.log("result2 =", fizzBuzz.generate(3));
    console.log("result3 =", fizzBuzz.generate(5));
    console.log("result4 =", fizzBuzz.generate(15));
    console.log("result5 =", fizzBuzz.generate(event.key1));
    callback(null, fizzBuzz.generate(15));
};
