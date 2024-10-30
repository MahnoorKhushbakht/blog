import  { Schema, model, models } from 'mongoose';

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, 
  versionKey: false,
});



const Contact = models.Contact || model('Contact', contactSchema);

export { Contact };
