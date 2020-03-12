const express=require("express");
const app=express();
const fs = require('fs');
// app.get("/",(req,res)=>{
// 	res.send("ajith");
// })
// app.use(express.json());
// app.use(express.text());

// app.put('/:index/:property',(req,res)=>{
// 	const read = fs.readFileSync('server.json');
// 	const convert = JSON.parse(read);
// 	const index=req.params.index-1;
// 	const property=req.params.property;
// 	convert[index][property]=req.body
// 	const write = fs.writeFileSync('server.json',JSON.stringify(convert,null,4));
// 	res.send(convert)
// })

// app.post('/',(req,res)=>{
// 	const read = fs.readFileSync('server.json');
// 	const convert = JSON.parse(read);
// 	const newDict = {'name': "abd",'age': 18,'mail':'abd@gmail.com'};
// 	convert.push(newDict);
// 	const write = fs.writeFileSync('server.json',JSON.stringify(convert,null,4));
// 	res.send(convert)
// })

// app.get("/",(req,res)=>{
// 	res.send("i am ajith");
// })

app.use(express.json());
app.use(express.text());

// app.put('/:index/:property',(req,res)=>{
// 	const read = fs.readFileSync('server.json');
// 	const convert = JSON.parse(read);
// 	const index=req.params.index-1;
// 	const property=req.params.property;
// 		convert[index][property]=req.body
// 		const write = fs.writeFileSync('server.json',JSON.stringify(convert,null,4));
// 		res.send(convert)
// 	})
	
// app.post('/',(req,res)=>{
// 	const read=fs.readFileSync('server.json');
// 	const convert =JSON.parse(read);
// 	const newDict={"name":"qqqq","age":16,"colour":"blue"};
// 	convert.push(newDict);
// 	const write=fs.writeFileSync('server.json',JSON.stringify(convert,null,4));
// 		res.send(convert)
// })

// app.delete('/:index',(req,res)=>{
// 	const read = fs.readFileSync('server.json');
// 	const convert = JSON.parse(read);
// 	const index = req.params.index-1;
// 	delete convert[index];
// 	const write = fs.writeFileSync('server.json',JSON.stringify(convert,null,4));
// 	res.send(convert)
// })





// app.get('/',(req,res)=>{
// 	const read = fs.readFileSync('availableCourses.json');
// 	const convert=JSON.parse(read);
// for (i in convert){
// 		delete convert[i]["submission"]
// 	}
// 		res.send(convert)
// })	



// app.get('/courses/',(req,res)=>{
// 	const read = fs.readFileSync('availableCourses.json');
// 	const convert=JSON.parse(read);
// 	list1=[]
// 	for (i in convert){
// 		for (j of convert[i]["submission"]){
// 			delete j["usersummision"]
// 			console.log(j)
// 			list1.push(j)
// 		}
// 	}
// 	res.send(list1)
// })


app.get('/',(req,res)=>{
	const read = fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read);
	list1=[]
	for (i in convert){
		for (j of convert[i]["submission"]){
			list1.push(j["usersummision"])
		}
	}
	res.send(list1)
})


app.get('/command/:id/:courseid/',(req,res)=>{
	const read=fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read)
	const idVar=req.params.id
	const courseidVar=req.params.courseid
	list1=[]
	list1.push(convert[idVar-1].submission[courseidVar-1])
	res.send(list1)
})





// app.get('/command/:id',(req,res)=>{
// 	const read = fs.readFileSync('availableCourses.json');
// 	const convert =JSON.parse(read);
// 	const idVar=req.params.id
// 	list1=[]
// 	list1.push(convert[idVar-1].submission);
// 	res.send(list1)
// })
// 		const write = fs.writeFileSync('availableCourses.json',JSON.stringify(list1,null,4));


app.get('/command/',(req,res)=>{
	const read =fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read);
	list1=[]
	for (i in convert){
		console.log(i)
		for (j in convert[i].submission){
		
			list1.push(convert[i].submission[j].usersummision)
		}
	}
	res.send(list1)
})



app.get('/:id/',(req,res)=>{
	const read = fs.readFileSync('availableCourses.json');
	const convert=JSON.parse(read);
	const idVar=req.params.id
list1=[]
for (i in convert){
	if (convert[i].id==idVar){
		delete convert[i].submission
		list1.push(convert[i])
		console.log(list1)

	}
}
res.send(list1)
})





// app.put('/',(req,res)=>{
// 	const read = fs.readFileSync('availableCourses.json');
// 	const convert = JSON.parse(read);
// 	for (i in convert){
// 		console.log(i)
// 		convert[i]["description"]=req.body
// 	}
// 	const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
// 	res.send(convert)
// })





// app.put('/courses',(req,res)=>{
// 	console.log(123)
// 	const read = fs.readFileSync('availableCourses.json');
// 	const convert = JSON.parse(read);
// 	for (i in convert){
// 		for (j in convert[i].submission){
// 			convert[i].submission[j].description=req.body
// 			console.log(req.body)
// 	}
// 	}
// 	const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
// 	res.send(convert)
// })





app.put('/ajith/:id/:courseid',(req,res)=>{
	const read = fs.readFileSync('availableCourses.json');
	const convert = JSON.parse(read);
	const idVar=req.params.id
	const courseidVar=req.params.courseid
	convert[idVar-1].submission[courseidVar-1]["name"]=req.body
	delete convert[idVar-1].submission[courseidVar-1].usersummision
	const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
	res.send(convert[idVar-1].submission[courseidVar-1])
})



// app.put('/ajith/:id',(req,res)=>{
// 	const read = fs.readFileSync('availableCourses.json');
// 	const convert = JSON.parse(read);
// 	const idVar=req.params.id
// 	convert[idVar-1]["name"]=req.body
// 	const write = fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
// 	res.send(convert[idVar-1])
// })




 app.post('/aji/:id',(req,res)=>{
	const read=fs.readFileSync('availableCourses.json');
	const convert =JSON.parse(read);
	const idVar=req.params.id
	const newDict={"name":"qqqq","age":16,"colour":"blue"};
	convert[idVar-1].push(newDict);
	const write=fs.writeFileSync('availableCourses.json',JSON.stringify(convert,null,4));
		res.send(convert[idVar-1])
})

app.listen(8080,()=>{
	console.log("server stated in port 8000")
})