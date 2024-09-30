var _ = require('lodash');

export function findMatchingEntries(filters, entries) {
    let unfilteredEntries = []; 
    let matchingEntries = [];

    if (filters.roasters != undefined) {
        unfilteredEntries = [];
        let roasterArray = Object.keys(filters.roasters).map(key => filters.roasters[key]);
        let flatRoasterArray = roasterArray.map(function (obj) {
            return obj.value;
        });
        entries.forEach(function(entry) {
            let entryRoasterArray = entry.properties.roasters;
            if(entryRoasterArray) {
                const found = entryRoasterArray.some(r=> flatRoasterArray.includes(r));
                if (found) {
                    unfilteredEntries.push(entry);
                }
            }
        });
    } else {
        unfilteredEntries = entries;
    }

    unfilteredEntries.forEach(function(entry) {
        let entryProperties = entry.properties;
        let doesMatch = _.isMatch(entryProperties, filters.properties);

        if(doesMatch) {
            matchingEntries.push(entry);
        }
    })
    
    return matchingEntries;
}