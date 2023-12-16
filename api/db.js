import mongoose from "mongoose";

export const DbConnection = async (dbName, dbUrl) => {
 try {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(dbUrl);

    if (!connection) {
      return console.log("db connection unknown error");
    }

    console.log('project database connected yessss merciiii samy ');
 } catch (error) {
    console.error(error);
 }
};
// mongodb://127.0.0.1:27017/project