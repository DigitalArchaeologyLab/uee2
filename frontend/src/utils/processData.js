export function processData(Articles, Periods, Activities) {
    let articleData = [];
    let allTaggedPeriods = [];
    let allTaggedActivities = [];

    Articles.forEach((article) => {
        // translate tagged periods into start and end times
        let periodList = article.period;
        let articlePeriodRecords = [];
        periodList.forEach((taggedPeriod) => {
            let taggedPeriodRecord = Periods.find(function (element) {
                return element.id === taggedPeriod;
            })
            allTaggedPeriods.push(taggedPeriodRecord)
            articlePeriodRecords.push(taggedPeriodRecord)
            
        })

        // gather activity types based on the tagged activities
        let activityList = article.activity;
        let activityTypes = [];
        activityList.forEach((taggedActivity) => {
            let taggedActivityRecord = Activities.find(function (element) {
                return element.id === taggedActivity;
            })
            allTaggedActivities.push(taggedActivityRecord)
            activityTypes.push(taggedActivityRecord.type)
        })

        // prep an array of article ids with period and type data
        articleData.push({"id": article.id, "periods":articlePeriodRecords, "types":activityTypes})
    })

    return articleData;
}