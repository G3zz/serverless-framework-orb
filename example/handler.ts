function addNumbers(numbers: Array<number>) {
  console.log("Adding Numbers")
  console.log("Numbers to add: " + numbers)
  console.log(typeof numbers)
  return numbers.reduce((acc,cv) => acc + cv)
}

module.exports.add = async (event: any) => {
 //Works locally only. Has a problem behind the API Gateway
  let bodyObj = event.body
  let values = bodyObj.numbers.values()
  console.log("Values = " + values.toString())
  console.log("Received Add event")
  console.log("Body of event: " + bodyObj)
  console.log(typeof bodyObj)
  console.log("Numbers: " + bodyObj.numbers)
  console.log("Number type: " + typeof bodyObj.numbers)
  console.log("Stringified version:")
  console.log(JSON.stringify(bodyObj))
  console.log("-----")
  console.log()
  const response = {
    statusCode: 200,
    body: {result: `${addNumbers(bodyObj.numbers)}`}
  }
  return response
}

module.exports.hello = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello!" })
  }
  console.log({ response })
  return response
}