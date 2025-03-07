const createItem = (req, res) => {
    res.send({ message: "Item creado correctamente" });
};
const data = await tracksModel.delete({ _id: id });

module.exports = { createItem };
