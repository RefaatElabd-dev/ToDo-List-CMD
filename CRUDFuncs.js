const fs = require('fs');
const path = require('path');

const todoPath = path.join(__dirname,'todo.json');
const readToDos = (todoPath) => 
        JSON.parse(fs.readFileSync(todoPath, { encoding: 'utf8' }));
const writeFile = (todoPath, data) => 
        fs.writeFileSync(todoPath, JSON.stringify(data));

const AddItem = (item) => {
    let tdsParsed = readToDos(todoPath);
    tdsParsed.push( { "id": +(tdsParsed[ (tdsParsed.length) -1 ]).id + 1,
                     "title": item 
                    });
    writeFile(todoPath, tdsParsed);
    console.log("added");
}

const ListItems = () => {
    let todo = readToDos(todoPath);
    console.log(todo.map((value) => 
        `id = ${value.id} and title = ${value.title}`));
}

const EditItem = (item, newItem) => {
    let tdsParsed = readToDos(todoPath);
    const x = tdsParsed.find((todo) => todo.title === item);
    x.title = newItem;
    writeFile(todoPath, tdsParsed);
    console.log((x) ? "editted": "not matched");
}

const DeleteItem = (item) => {
    let tdsParsed = readToDos(todoPath);
    const toDO = tdsParsed.findIndex((todo) => todo.title === item);

    if (toDO)
        tdsParsed.splice(toDO, 1);

    writeFile(todoPath,tdsParsed);
    console.log((toDO)?"deleted":"not matched");
}

module.exports = {
    AddItem, ListItems, EditItem, DeleteItem
}