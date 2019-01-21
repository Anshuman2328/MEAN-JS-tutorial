var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var i=0; i< students.length; i++){
    console.log(`Name: ${students[i].name}, Cohort: ${students[i].cohort}`)
}
for (var student in students) {
	console.log(`Name: ${students[student].name}, Cohort: ${students[student].cohort}`);
}


// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, as shown below,
// and logs the information to the console.
var users = {
	employees: [
        {first_name: 'Miguel', last_name: 'Jones'},
        {first_name: 'Ernie', last_name: 'Bertson'},
        {first_name: 'Nora', last_name: 'Lu'},
        {first_name: 'Sally', last_name: 'Barkyoumb'}
	],
	managers: [
       {first_name: 'Lillian', last_name: 'Chambers'},
       {first_name: 'Gordon', last_name: 'Poe'}
	]
};


for (var i in users) {
	console.log(i.toUpperCase());
	for (var j in users[i]) {
		var counter = 1;
		var firstName = users[i][j].first_name.toUpperCase();
		var lastName = users[i][j].last_name.toUpperCase();
		var nameCount = firstName.length + lastName.length;
		console.log(`${counter} - ${firstName}, ${lastName} - ${nameCount}`);
		console.log(`${counter} - ${firstName}, ${lastName} - ${nameCount}`);
		console.log(`${counter} - ${firstName}, ${lastName} - ${nameCount}`);
		console.log(`${counter} - ${firstName}, ${lastName} - ${nameCount}`);
		console.log(`${counter} - ${firstName}, ${lastName} - ${nameCount}`);
		counter++;
	}
}