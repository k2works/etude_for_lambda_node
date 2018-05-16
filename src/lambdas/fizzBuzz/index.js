"use strict";
import FizzBuzz from "../../lib/fizzBuzz/fizzBuzz";

exports.handler = (event, context, callback) => {

    let number =  (event.pathParameters || {}).number || false;
    let fizzBuzz = new FizzBuzz;
    switch(event.httpMethod){

    case "GET":
        console.log(event.pathParameters);
        if(number) {
            callback(null, {body: fizzBuzz.generate(number)});
            return;
        }

        callback(null, {body: "No number"});
        break;
    default:
        // Send HTTP 501: Not Implemented
        console.log("Error: unsupported HTTP method (" + event.httpMethod + ")");
        callback(null, { statusCode: 501 });

    }
};
