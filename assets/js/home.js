let allData = {};

async function getTradingData() {
    let data = await fetch('https://66682923f53957909ff6d8d8.mockapi.io/items').then(then => then.json());
    allData = data;
    localStorage.setItem('allItems', JSON.stringify(allData))
};


getTradingData();



