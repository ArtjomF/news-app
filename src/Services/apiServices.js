const apiUrl = 'https://newsapi.org';
// async funkcija rabotet s promise/obewanija
// Promise eto objekt kotoryi izmenitsja v budushem
// U promise est tri sostojanija 
// 1: pending / v ozidanii - izna4alnoe sostojanie
// 2: fulfild / vypolnenyi - esli vsjo uda4no proshlo
// 3: rejected / otklonjonnyi - esli proizoshla oshibka
// Promissy nam nuzny dlja togo 4toby nashe prilozenije moglo by rabotat ne dozidajas otveta
// klju4evoe slovo await mozet ispolzovatsja tolko async funccijah
// asunc funkcija vypolnjaetsja ne v zevisimosti ot vsego ostalnogo koda
// await preobrazaet objekt Promise v otvet ot zaprosa

export async function getEverything(data) {
    const params = new URLSearchParams({
        ...data,
        apiKey: process.env.REACT_APP_API_KEY
        
    });
    return await fetch(`${apiUrl}/v2/everything?${params}`);
}