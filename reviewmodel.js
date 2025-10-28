

{
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: "Movie" },
      rating: Number,
        comment: String,
          createdAt: { type: Date, default: Date.now }
          }