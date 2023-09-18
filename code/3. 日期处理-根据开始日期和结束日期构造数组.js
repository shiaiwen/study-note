function getDateRange(startDate, endDate) {
    let dateArray = [];
    let currentDate = new Date(startDate);
    while (currentDate <= new Date(endDate)) {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const dateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        dateArray.push(dateString);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;

}
const dataRangeArr = getDateRange('2023-09-18', '2023-09-20')
console.log(dataRangeArr)


