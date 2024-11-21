import Thing from "./thing.model.js";

export const getThings = async (req, res) => {
  try {
    const things = await Thing.find({});
    return res.json({ things });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err });
  }
};

export const getThing = async (req, res) => {
  try {
    const { id } = req.params;
    const thing = await Thing.findById(id);
    return res.json({ thing });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err });
  }
};

export const createThing = async (req, res) => {
  const { name, pic, desc } = req.body;
  if (!name || !pic || !desc) {
    return res.status(400).json({ message: "Provide all fields" });
  }
  const thing = new Thing({ name, pic, desc });
  try {
    await thing.save();
    return res.json(thing);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err });
  }
};

export const updateThing = async (req, res) => {
  const { id } = req.params;
  const { name, pic, desc } = req.body;
  try {
    const thing = await Thing.findByIdAndUpdate(
      id,
      { name, pic, desc },
      { returnDocument: "after" }
    );
    return res.json({ thing });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err });
  }
};

export const deleteThing = async (req, res) => {
  const { id } = req.params;
  try {
    const thing = Thing.findByIdAndDelete(id);
    return res.json({ thing });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err });
  }
};
