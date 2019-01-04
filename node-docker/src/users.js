var users = [
	{
		"id": 1,
		"username": "Tiger",
		"name": "Tiger Nixon",
		"position": "Edinburgh",
		"office": "Edinburgh",
		"extn": 5421,
		"startdate": "2011/04/25",
		"salary": "$320,800"
	},
	{
		"id": 2,
		"username": "Garrett",
		"name": "Garrett Winters",
		"position": "Accountant",
		"office": "Tokyo",
		"extn": 8422,
		"startdate": "2011/07/25",
		"salary": "$170,750"
	},
	{
		"id": 3,
		"username": "Ashton",
		"name": "Ashton Cox",
		"position": "Junior Technical Author",
		"office": "San Francisco",
		"extn": 1562,
		"startdate": "2009/01/12",
		"salary": "$86,000"
	},
	{
		"id": 4,
		"username": "Cedric",
		"name": "Cedric Kelly",
		"position": "Senior Javascript Developer",
		"office": "Edinburgh",
		"extn": 6224,
		"startdate": "2012/03/29",
		"salary": "$433,060"
	},
	{
		"id": 5,
		"username": "Airi",
		"name": "Airi Satou",
		"position": "Accountant",
		"office": "Tokyo",
		"extn": 5407,
		"startdate": "2008/11/28",
		"salary": "$162,700"
	},
	{
		"id": 6,
		"username": "Brielle",
		"name": "Brielle Williamson",
		"position": "Integration Specialist",
		"office": "New York",
		"extn": 4804,
		"startdate": "2012/12/02",
		"salary": "$372,000"
	},
	{
		"id": 7,
		"username": "Herrod",
		"name": "Herrod Chandler",
		"position": "Sales Assistant",
		"office": "San Francisco",
		"extn": 9608,
		"startdate": "2012/08/06",
		"salary": "$137,500"
	},
	{
		"id": 8,
		"username": "Rhona",
		"name": "Rhona Davidson",
		"position": "Integration Specialist",
		"office": "Tokyo",
		"extn": 6200,
		"startdate": "2010/10/14",
		"salary": "$327,900"
	},
	{
		"id": 9,
		"username": "Colleen",
		"name": "Colleen Hurst",
		"position": "Javascript Developer",
		"office": "San Francisco",
		"extn": 2360,
		"startdate": "2009/09/15",
		"salary": "$205,500"
	},
	{
		"id": 10,
		"username": "Sonya",
		"name": "Sonya Frost",
		"position": "Software Engineer",
		"office": "Edinburgh",
		"extn": 1667,
		"startdate": "2008/12/13",
		"salary": "$103,600"
	}
];

exports.findAll = function() {
	return users;
};

exports.findById = function (id) {
	for (var i = 0; i < users.length; i++) {
		if (users[i].id == id) return users[i];
	}
};
