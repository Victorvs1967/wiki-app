export function isServerSide () {
    console.log(process.env.APP_ENV);
    return process.env.APP_ENV !== undefined;
}