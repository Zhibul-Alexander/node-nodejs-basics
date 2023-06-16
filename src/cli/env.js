export const parseEnv = () => {
    const prefix = 'RSS_'
    const processEnv = process.env

    const envKeys = Object.keys(processEnv);
    const rssKeys = envKeys.filter((key) => {
        return key.startsWith(prefix)
    })

    if (!rssKeys.length) {
        return console.log('No RSS_ environment variables found')
    }

    rssKeys.forEach((key) => {
         console.log(`${key}=${processEnv[key]}`)
    });
};

parseEnv();