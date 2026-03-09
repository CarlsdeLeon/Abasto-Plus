// mongoConnection.ts
import mongoose from 'mongoose';
import { injectable } from 'inversify';
import { DatabaseConnection } from './database-connection.interface';

@injectable()
export class MongoConnection implements DatabaseConnection {
  private isConnected = false;

  constructor() {}

  async connect(): Promise<void> {
    if (this.isConnected) {
      console.log('MongoDB already connected');
      return;
    }

    try {
      await mongoose.connect(process.env.MONGO_URL as string);
      this.isConnected = true;
      console.log('MongoDB connected successfully');
      
      mongoose.connection.on('error', (error: any) => {
        console.error('MongoDB connection error:', error);
        this.isConnected = false;
      });

      mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected');
        this.isConnected = false;
      });

    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    if (!this.isConnected) return;
    
    await mongoose.disconnect();
    this.isConnected = false;
  }
}