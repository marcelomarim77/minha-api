export const getEnviroment = (key: string, throwException = false): string => {
    const env = process.env[key];
    console.log(env);
    if (!throwException) {
        return env;
    }

    if (env[key].value === null) {
        throw new Error(`Key ${key} was not found.`);
    }
    return env;
}
