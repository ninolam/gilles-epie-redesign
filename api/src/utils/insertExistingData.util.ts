import chalk from "chalk";
import capitalizeFirstLetter from "./capitalizeFirstLetter.util";

const insertExistingData = (data: any[], Model: any) => {
  const collectionName = Model.collection.collectionName;

  data.forEach(async (el, i) => {
    const key = el.title ? "title" : "name";
    const element = await Model.collection.countDocuments({
      [key]: el[key],
    });
    if (element > 0) {
      // tslint:disable-next-line:no-console
      console.log(
        `${chalk.yellow("[index.js]")} ${capitalizeFirstLetter(
          collectionName
        )} item (${chalk.blue(`${i + 1}/${data.length}`)}) exist: ${el[key]}`
      );
    } else {
      Model.collection.insertOne(el);
      // tslint:disable-next-line:no-console
      console.log(
        `${chalk.green("[index.js]")} ${capitalizeFirstLetter(
          collectionName
        )} item (${chalk.blue(`${i + 1}/${data.length}`)}) inserted: ${el[key]}`
      );
    }
  });
};

export default insertExistingData;
