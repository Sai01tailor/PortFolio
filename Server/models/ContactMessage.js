import mongoose from 'mongoose';

const ContactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Sender name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    email: {
      type: String,
      required: [true, 'Sender email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
      minlength: [5, 'Message must be at least 5 characters long'],
      maxlength: [3000, 'Message cannot exceed 3000 characters'],
    },
    whatsappNotificationStatus: {
      type: String,
      enum: ['pending', 'sent', 'failed', 'disabled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

ContactMessageSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

ContactMessageSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model('ContactMessage', ContactMessageSchema);
