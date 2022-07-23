import mongoose from "mongoose";
import UserModel from "./Models/Users.js";

const main = async () => {
  try {
    //conectamos a la base de datos
    const URL = "mongodb://localhost:27017/ecommerce";
    let rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");

    /* --------------------------------------- */
    /*                CREATE                   */
    /* --------------------------------------- */

    console.log('CREATE');
    const user = {
      name: 'Juan',
      lastName: 'Perez',
      email: 'test@test.com',
      userName: 'jperez',
      password: 123456
    };

    // const userSaved = new UserModel(user);
    // let response = await userSaved.save();
    // console.log(response);

    console.log("CREATE OTHER USER");
    await UserModel.create({
      name: "Juana",
      lastName: "Perez",
      email: "test@test.com",
      userName: "jperez",
      password: 123456,
    });

    //create es un atajo para guardar uno o más documentos en la base de datos.

    /* --------------------------------------- */
    /*                READ ALL                 */
    /* --------------------------------------- */

    // console.log("READ ALL");
    // const usersList = await UserModel.find({});
    // console.log({ usersList });

    /* --------------------------------------- */
    /*                UPDATE                   */
    /* --------------------------------------- */
    // console.log("UPDATE");
    // let userUpdate = await UserModel.updateOne({
    //   _id: "62db480fccb150d329c9b78a"},
    //   {$set: {name: 'Pamela'}}
    //   )
    //   console.log(userUpdate);

    // console.log('DELETE');
    //   const response = await UserModel.deleteOne({ _id: "62db480fccb150d329c9b78a"});
    //   console.log({ response });

    // console.log("READ ONE");
    // const usersList = await UserModel.find({name: "Juana"});
    // console.log({ usersList });

    /* --------------------------------------- */
    /*                UPDATE                   */
    /* --------------------------------------- */

    console.log("READ PROJECTION + FILTER");
    console.log(
      await UserModel.find(
        { name: "Juana" },
        { name: 1, lastName: 1, email: 1, _id: 0 }
      )
    );
    console.log(
      await UserModel.find(
        { lastName: "Perez" },
        { name: 1, lastName: 1, email: 1, _id: 0 }
      )
    );

    console.log("READ PROJECTION + SORT");
    console.log(
      await UserModel.find({}, { name: 1, _id: 0 }).sort({ name: -1 })
    );

    console.log("READ PROJECTION + SORT");
    console.log(
      await UserModel.find({}, { name: 1, _id: 0 }).sort({ name: -1 })
    );

    console.log("READ PROJECTION + SORT + SKIP");
    console.log(
      await UserModel
        .find({}, { name: 1, _id: 0 })
        .sort({ name: -1 })
        .skip(5)
    );

    console.log("READ PROJECTION + SORT + SKIP + LIMIT");
    console.log(
      await UserModel
        .find({}, { name: 1, _id: 0 })
        .sort({ name: -1 })
        .skip(1)
        .limit(2)
    );

  } catch (error) {
    console.error("DB Error: ", error);
  }
};

main();
