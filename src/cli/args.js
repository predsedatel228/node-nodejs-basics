const parseArgs = () => {
    const args = process.argv;
    const answer = [];  
    for (let i=2; i<=args.length-2; i+=2) {
      answer.push(`${args[i].slice(2)} is ${args[i+1]}`)
    }
    console.log(answer.toString());
};

parseArgs();