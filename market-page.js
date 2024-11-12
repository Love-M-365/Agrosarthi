const pricesData = {
    wheat: { today: "₹2000", yesterday: "₹1950", lastWeek: "₹1900" },
    rice: { today: "₹3000", yesterday: "₹2900", lastWeek: "₹2850" },
    corn: { today: "₹1500", yesterday: "₹1480", lastWeek: "₹1450" },
    barley: { today: "₹2200", yesterday: "₹2150", lastWeek: "₹2100" },
    soybean: { today: "₹4200", yesterday: "₹4150", lastWeek: "₹4100" },
    sugarcane: { today: "₹3500", yesterday: "₹3450", lastWeek: "₹3400" },
    cotton: { today: "₹5200", yesterday: "₹5150", lastWeek: "₹5100" },
    potato: { today: "₹1200", yesterday: "₹1150", lastWeek: "₹1100" },
    apple: { today: "₹7000", yesterday: "₹6950", lastWeek: "₹6900" },
    banana: { today: "₹400", yesterday: "₹380", lastWeek: "₹350" },
    orange: { today: "₹1500", yesterday: "₹1450", lastWeek: "₹1400" },
    grapes: { today: "₹2000", yesterday: "₹1950", lastWeek: "₹1900" },
    mango: { today: "₹5000", yesterday: "₹4950", lastWeek: "₹4900" }
};

function updatePrices() {
    const selectedCrop = document.getElementById("cropSelect").value;
    const todayPrice = document.getElementById("todayPrice");
    const yesterdayPrice = document.getElementById("yesterdayPrice");
    const lastWeekPrice = document.getElementById("lastWeekPrice");

    if (selectedCrop && pricesData[selectedCrop]) {
        todayPrice.textContent = pricesData[selectedCrop].today;
        yesterdayPrice.textContent = pricesData[selectedCrop].yesterday;
        lastWeekPrice.textContent = pricesData[selectedCrop].lastWeek;
    } else {
        todayPrice.textContent = "-";
        yesterdayPrice.textContent = "-";
        lastWeekPrice.textContent = "-";
    }
}