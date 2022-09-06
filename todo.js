const process = require('process'); 
const { AddItem,
         ListItems,
         EditItem,
         DeleteItem
        } = require('./CRUDFuncs');

const argv = process.argv;
const [ , ,cmd, title, newTitle] = argv;

const [add, list, edit, deleteItem] = ['add', 'list', 'edit', 'delete']

switch(cmd){
    case add:
        AddItem(title);
        break;
    case list:
        ListItems();
        break;
    case edit:
        EditItem(title, newTitle);
        break;
    case deleteItem:
        DeleteItem(title);
        break;
    default:
        console.log("argv[2] is not defiend");
}