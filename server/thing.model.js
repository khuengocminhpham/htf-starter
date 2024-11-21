import { model, Schema, SchemaTypes } from "mongoose";

const ThingSchema = new Schema({
  name: {
    type: SchemaTypes.String,
    required: true,
  },
  pic: {
    type: SchemaTypes.String,
    required: true,
  },
  desc: {
    type: SchemaTypes.String,
    required: true,
  },
});

const Thing = model("Thing", ThingSchema);

export default Thing;
