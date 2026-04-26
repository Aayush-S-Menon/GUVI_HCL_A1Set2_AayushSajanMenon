db.movies.insertOne({
  title: "Inception",
  genre: "Sci-Fi",
  rating: 8.8,
  releaseYear: 2010,
  availability: true
});

db.movies.insertMany([
  { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008, availability: true },
  { title: "Mad Max: Fury Road", genre: "Action", rating: 8.1, releaseYear: 2015, availability: true },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014, availability: false },
  { title: "Die Hard", genre: "Action", rating: 8.2, releaseYear: 1988, availability: true },
  { title: "Gladiator", genre: "Action", rating: 8.5, releaseYear: 2000, availability: true }
]);

db.movies.find();

// The _id field is included by default, so we explicitly set it to 0 to hide it
db.movies.find({}, { title: 1, rating: 1, _id: 0 });


db.movies.find({ genre: "Action" })
         .sort({ releaseYear: -1 })
         .limit(5);

         
