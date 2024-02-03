//Qustion1
// db.products.aggregate([
// { $group:{_id: "$category",
//     NumOfProfucts: {
//         $sum:1
//     }
//     }
//     }
// ])


//Question2
// db.products.aggregate(
// [
// {$group:{_id: "$category",
//     maxproductprice : {
//         $max:"$price"}
//         }},
//         {$match:{_id: {$ne:null}}}])



//AHmed orders and products
// 
// db.users.aggregate([
//   {
//     $match: {
//       name: {
//         $eq: "ahmed"
//       }
//     }
//   },
//   {
//     $lookup: {
//       from: "orders",
//       localField: "_id",
//       foreignField: "userId",
//       as: "orders"
//     }
//   },
//   {
//     $lookup: {
//       from: "products",
//       localField: "orders.productsIds",
//       foreignField: "_id",
//       as: "orderProducts"
//     }
//   }
//   
// ])
  
  
  
  //highst order price 
db.users.aggregate([
  {
    $match: {
      name: "ahmed"
    }
  },
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "userId",
      as: "orders"
    }
  },
  {
    $unwind: "$orders"
  },
  {
    $lookup: {
      from: "products",
      localField: "orders.productsIds",
      foreignField: "_id",
      as: "orderProducts"
    }
  },
  {
    $unwind: "$orderProducts"
  },
  {
    $group: {
      _id: "$_id", 
      highestOrderPrice: { $max: "$orderProducts.price" }
    }
  }
])





