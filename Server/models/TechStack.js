import mongoose from 'mongoose';

const TechStackSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Tech name is required'],
      trim: true,
      unique: true,
    },
    type: {
      type: String,
      required: [true, 'Tech type/category is required'],
      trim: true,
      enum: ['Language', 'Frontend', 'Backend', 'Database', 'Real-time', 'Machine Learning', 'Computer Vision', 'DevOps', 'Tool', 'Other'],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

TechStackSchema.set('toJSON', {
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  },
});

export default mongoose.model('TechStack', TechStackSchema);
