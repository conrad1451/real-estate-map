// resolvers.ts

// CHQ: Gemini AI generated
// Define your GraphQL resolvers here
export const resolvers = {
  Query: {
    locations: () => {
      // Return placeholder data that matches the Location type,
      // or integrate with your actual database/data source here.
      return [
        {
          id: "1",
          name: "Central Park View",
          description: "A large, spacious real estate property.",
          photo: "url/to/photo1",
        },
        {
          id: "2",
          name: "Downtown Loft",
          description: "Modern loft in the city center.",
          photo: "url/to/photo2",
        },
      ];
    },
  },
};
