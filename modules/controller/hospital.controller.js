import hospitalCollection from "../model/hospitalmodel.js";

export const gethospital = async (req, res) => {  
    const id = req.params._id;
    try {
      const doc = await hospitalCollection.findOne(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      res.json(doc);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
};

//get all data
export const getAll = async (req, res) => {
  const data = await hospitalCollection.find();
  res.json(data);
};

//save data
export const savehospital = async (req, res) => {
  const employee = new hospitalCollection(req.body);
  await employee.save();
  res.status(201).json("Data Stored succesfully!");
  res.end("successful");
};

//Update Data
export const Updatehospital = async (req, res) => {
  const id = req.params._id;
  try {
    const doc = await hospitalCollection.findOneAndUpdate(
      { _id: id },
      req.body,
      {
        new: true,
      }
    );
    res.json("Data Updated Sucessfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

  
};

//Delete data
export const deletehospital = async (req, res) => {
  const id = req.params._id;
  try {
    const doc = await hospitalCollection.findOneAndDelete(
      { _id: id },
      { new: true }
    );
    console.log(doc.data);
    res.json("Deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
