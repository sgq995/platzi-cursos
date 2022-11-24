const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createBadges(limit = 5) {
    const result = [];

    for (let i = 0; i < limit; ++i) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName, lastName);

        result.push({
            id: faker.random.uuid(),
            firstName,
            lastName,
            email,
            jobTitle: faker.name.jobTitle(),
            twitter: `${faker.internet.userName(firstName, lastName)}${faker.address.zipCode()}`,
            avatarUrl: faker.internet.avatar(),
        });
    }

    return result;
}

function main() {
    const data = {
        badges: createBadges(),
    };

    fs.writeFileSync(
        path.resolve(__dirname, 'db.json'),
        JSON.stringify(data, null, 4)
    );
}

main();
