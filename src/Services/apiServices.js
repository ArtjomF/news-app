export async function getEverything(data) {
    return await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=7786a8d1d8e54abf9fdbb9c82370908b');
}