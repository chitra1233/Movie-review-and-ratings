

{
  username: String,
    email: String,
      password: String,
        role: { type: String, default: "user" },
          createdAt: { type: Date, default: Date.now }
          }