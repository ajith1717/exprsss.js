const express=require('express');
const fs     =require('fs');
const app    =express();
app.use(express.json());
filedata=fs.readFileSync('availableCourses.json');
filedata=JSON.parse(filedata);
var data=[]
for(i in filedata){
    name=filedata[i].name,
    description=filedata[i].description
    data.push({"id":parseInt(i)+1,"name":name,"description":description,"submission":[]})
}
// console.log(data);

fs.writeFileSync('availableCourses.json',JSON.stringify(data,null,2));
console.log('ok')

filedata=fs.readFileSync('availableCourses.json');
filedata=JSON.parse(filedata);
for(i in filedata){
    id  =filedata[i].id
    name=filedata[i].name,
    submission=filedata[i].submission
    for (var j =1;j<10;j++){
        submission.push({
            "id":id,
            "courseid":j,
            "name":name+" Level - "+j,
            "description":filedata[i].description+" step - "+j,
            "usersummision":[]
        })}
    filedata[i].submission=submission

}

fs.writeFileSync('availableCourses.json',JSON.stringify(filedata,null,2));
console.log('ok')

filedata=fs.readFileSync('availableCourses.json');
filedata=JSON.parse(filedata);
for(i in filedata){
    id  =filedata[i].id
    name=filedata[i].name,
    submission=filedata[i].submission
    for (var j in submission){
        let courseid  =filedata[i].submission[j].courseid;
        let list=['kirithivr19@navgurukul.org','biju19@navgurukul.org',"yogessh19@navgurukul.org","paranthaman19@navgurukul.org","ajith19@navgurukul.org","anand19@navgurukul.org","babu19@navgurukul.org","kumar19@navgurukul.org","prakash19@navgurukul.org","aman19@navgurukul.org"]
        let cour=["please update the course ","we need more practical examples and questions to solve.","i like this course very much.","this course is very intresting.",]
        let range=Math.round(Math.random()*list.length)
        for (var k=0;k<range;k++){
            username=list[Math.round(Math.random()*(list.length-1))];
            usersubmissions=cour[Math.round(Math.random()*(cour.length-1))];
            var change=true;
            if (filedata[i].submission[j].usersummision){
                for (h in filedata[i].submission[j].usersummision){
                    if (filedata[i].submission[j].usersummision[h].username==username){

                        filedata[i].submission[j].usersummision[h].usersubmissions.push(usersubmissions);
                        change = false;
                    }
                }
            }
            if (change){
                filedata[i].submission[j].usersummision.push({"id":id,"courseid":courseid,"username":username,"usersubmissions":[usersubmissions]})};
            }
        }
        
    }



fs.writeFileSync('availableCourses.json',JSON.stringify(filedata,null,4));
console.log('ok')

