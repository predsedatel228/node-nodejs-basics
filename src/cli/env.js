const parseEnv = () => {
    const envVariables = process.env;
    for (let key in envVariables) {
        console.log(`RSS_${key}=${envVariables[key]};`)
    }
};

parseEnv();