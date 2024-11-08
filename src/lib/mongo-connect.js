import mongoose from 'mongoose';

const uri = process.env.NEXT_PUBLIC_DB_URL;

async function dbConnect() {
  if (mongoose.connection.readyState) {
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

export default dbConnect;
