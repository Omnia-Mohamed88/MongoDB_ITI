//Using Match and groupby get the java categories books and group them to get total books and averagepagecount
// 
// db.books.aggregate([
//   { $match: { categories: "Java" } },
//   { $group: { _id: "$categories", totalBooks: { $sum: 1 }, averagePageCount: { $avg: "$pageCount" } } }
// ]);
// 





//using $project and $adddFields and addtostring
//1 include value fields 
// db.books.aggregate([
//   { 
//     $project: {
//       title: 1,
//       pageCount: 1,
//       publishedDate: 1,
//       formattedDate: { $dateToString: { format: "%Y-%m-%d", date: "$publishedDate" } }
//     }
//   }
// ]);



// unwind of the authers array 
// db.books.aggregate([
//   { $unwind: "$authors" },
//   { $group: { _id: "$authors", totalBooks: { $sum: 1 } } }
// ]);


//sort by count for the categories
// db.books.aggregate([
//   { $unwind: "$categories" },
//   { $sortByCount: "$categories" }
// ]);
// 



//using skip ad limit
// let PageSize = 2;
// let PageNumber = 2;
// 
// db.books.aggregate([
//   { $skip: (PageNumber - 1) * PageSize },  // Skip the first (2 - 1) * 2 = 2 documents
//   { $limit: PageSize },  // Take the next 2 documents
//   { $count: "totalBooks" }  // Count the number of documents in this subset
// ]);
// 

db.books.aggregate([
  {
    $project: {
      title: 1,
      firstAuthor: { $arrayElemAt: ["$authors", 0] },  
      formattedDate: {
        $dateToString: { format: "%Y-%m-%d", date: "$publishedDate" }
      },
      categoryAndTitle: { $concat: ["$title", " - ", { $arrayElemAt: ["$categories", 0] }] }  
    }
  }
]);



