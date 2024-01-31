 //1. Create database named: FacultySystemDB.
 
 
//Create collection (student)

//db.createCollection("student")

//inserting one record each time

// 
// db.student.insertOne({FirstName:"Ahmed" , LastName:"Mohamed" ,
//     "Age":19 , faculty:{Name:"Cs" , Address:"Helwan"} ,
//     courses:[{CourseName:"c++" , Grade:"A+" , Pass:true},{CourseName:"Angular" , Grade:"B+" , Pass:true},{CourseName:"datastructure" , Grade:"C+" , Pass:true}] , Isfired:false})
// 
// 
// 
//inserting many students using one insert statement
//     
//     db.student.insertMany([{FirstName:"ALaa" , LastName:"mohamed" ,
//  "Age":22 , faculty:{Name:"Ai" , Address:"Cairo"} ,
//   courses:[{CourseName:"DS" , Grade:"f" , Pass:true},{CourseName:"c" , Grade:"D" , Pass:true},{CourseName:"oop" , Grade:"d" , Pass:true}] , Isfired:true},
//   {FirstName:"Ali" , LastName:"mohamed" ,
//   "Age":22 , faculty:{Name:"Eng" , Address:"Cairo"} ,
//   courses:[{CourseName:"f" , Grade:"f" , Pass:true},{CourseName:"embedded" , Grade:"f" , Pass:true},{CourseName:"DB" , Grade:"f" , Pass:true}] , Isfired:true}])
// //     
// //     
//     
//      Retrieve the following data:
// 	? All Students.
    
//     db.getCollection('student').find({})
//     
//     Student with specific First Name.

//     db.student.find({"FirstName":"norhan"})


// Students who his First Name=Ahmed, or Last Name= Ahmed.
// 

// db.student.find({$or:[{FirstName:"Ahmed"},{LastName:"Ahmed"}]})
// 


// Students that their First name isn't "Ahmed"
// 
// db.student.find({FirstName:{$ne:"Ahmed"}})
// // 



// Students with Age more than or equal to 21, and their faculty isn't NULL.
// 

// db.student.find({$and:[{Age:{$gte:21}},{faculty:{$ne:null}}]})



// 
// Display student with specific First Name, and display his First Name, 
// 	  Last name, IsFired fields only.

// db.student.find({FirstName:"Ahmed"},{FirstName:1,LastName:1,Isfired:1})
// 



// Update the student with specific FirstName, and change his LastName.

// db.student.updateOne({"FirstName":"Esraa"},{$set:{"LastName":"Mustafa"}})



// 6. Delete Fired students.
// 

// db.student.deleteMany({Isfired:true})
// 


// 7. Delete all students collection.
// db.student.drop()
// 

// 8. Delete the whole DB.
// db.dropDatabase()
// 