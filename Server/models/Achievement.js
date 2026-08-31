import mongoose from 'mongoose';

const ContentItemSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.Mixed },
    type: {
      type: String,
      required: true,
      enum: ['heading', 'para', 'image'],
    },
    text: { type: String, trim: true },
    src: { type: String, trim: true },
  },
  { _id: false }
);

const LinksSchema = new mongoose.Schema(
  {
    source: { type: String, default: null, trim: true },
    live: { type: String, default: null, trim: true },
    certificate: { type: String, default: null, trim: true },
  },
  { _id: false }
);

const AchievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Achievement title is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Achievement description is required'],
      trim: true,
    },
    content: {
      type: [ContentItemSchema],
      default: [],
    },
    links: {
      type: LinksSchema,
      default: () => ({ source: null, live: null, certificate: null }),
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

AchievementSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

AchievementSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model('Achievement', AchievementSchema);
