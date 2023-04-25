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

        // sort in reverse and find the latest end time
        articlePeriodRecords.sort((a, b) => b.end - a.end);
        let latestEnd = 2000;
        if (articlePeriodRecords.length > 0) {
            latestEnd = articlePeriodRecords[0].end;
        }
        
        // sort and find the earliest start time
        articlePeriodRecords.sort((a, b) => a.start - b.start);
        let earliestStart = -5000;
        if (articlePeriodRecords.length > 0) {
            earliestStart = articlePeriodRecords[0].start;
        }

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
        articleData.push({"id": article.id, "periods":articlePeriodRecords, "types":activityTypes, "earliestStart":earliestStart, "latestEnd":latestEnd})
    })

    return articleData;
}