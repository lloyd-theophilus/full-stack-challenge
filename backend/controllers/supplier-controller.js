//Import database
const knex = require("./../db");

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await knex.select("*").from("suppliers");
    res.send(suppliers);
  } catch (error) {
    console.log(error);
  }
}

exports.postSupplier = async (req, res) => {
  try {
    const { name } = req.body;
    const newSupplier = await knex("suppliers").insert({ name });
    res.send(newSupplier);
  } catch (error) {
    console.log(error);
  }
}

