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

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
    },
    imageSrc: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      trim: true,
      default: '',
    },
    link: {
      type: String,
      trim: true,
      default: null,
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
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
    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
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

// Virtual for id mapping
ProjectSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

ProjectSchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
    delete ret.__v;
    return ret;
  },
});

export default mongoose.model('Project', ProjectSchema);
