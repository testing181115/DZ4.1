const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName) {
    var wasCompanyFound = false;
    if (Object.values(company)[0] == companyName) {
        wasCompanyFound = true;
    }

    for (var key in company) {
        if (typeof company[key] === 'object') {
            if (Array.isArray(company[key])) {
                for (var i = 0; i < company[key].length; i++) {
                    findValueByKey(company[key][i], companyName);
                }
            } else {
                findValueByKey(company[key], companyName);
            }
        } else {
            if (wasCompanyFound) {
                console.log(key + ': ' + company[key]);
            }
        }
    }
}

findValueByKey(company, 'Клієнт 1.2.3');