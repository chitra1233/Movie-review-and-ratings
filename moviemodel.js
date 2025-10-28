

{
  title: String,
    description: String,
      genre: [String],
        releaseYear: Number,
          posterUrl: String,
            averageRating: Number,
              reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }]
              }