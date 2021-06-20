const writeJsonFile = (id, name, score) => {

    const fs = require('fs');
    // create a Json object
    const player = {
        'id': id,
        'name': name,
        'score': score
    };

    // converting an json object to string
    const data = JSON.stringify(player, null, 4);

    fs.writeFile('player_score.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
}

const readJsonFile = () => {
    const player_score = null;
    const fs = require('fs');
    fs.readFile('player_score.json', 'UTF-8', (err, data) => {
        if (err) {
            throw err;
        }

        player_score = JSON.parse(data.toString());
        console.log(player_score);
    });
}