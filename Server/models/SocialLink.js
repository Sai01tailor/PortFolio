import mongoose from 'mongoose';

const SocialLinkSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, 'Unique string identifier is required'],
      trim: true,
      unique: true,
    },
    label: {
      type: String,
      required: [true, 'Display label is required'],
      trim: true,
    },
    href: {
      type: String,
      required: [true, 'Link URL / mailto is required'],
      trim: true,
    },
    hoverRotate: {
      type: Number,
      default: 0,
    },
    hoverScale: {
      type: Number,
      default: 1.05,
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

SocialLinkSchema.set('toJSON', {
  transform: (_, ret) => {
    delete ret._id;
    delete ret.__v;
    delete ret.createdAt;
    delete ret.updatedAt;
    return ret;
  },
});

export default mongoose.model('SocialLink', SocialLinkSchema);
