# PPE Hackathon Server

## User

### Create a new user
POST https://ppeserver.herokuapp.com/api/auth/register

**Request Body Parameters**

Name | Data Type | Required
--- | ---- | ---
name | string | Yes
email | string | Yes
password | string | Yes

```
{
    "data": {
        "_id": "5f0aa51170ae180004333937",
        "name": "Jill Doe",
        "email": "jilldoe@mail1.com",
        "password": "$2a$10$i57c6uQ37WOrWSBLHKUtVu//Ytzg8tIqfDAxH5NqZvTYXhNMDHowK",
        "__v": 0
    }
}
```

### Login user
PUT https://ppeserver.herokuapp.com/api/auth/login

**Request Body Parameters**

Name | Data Type | Required
--- | ---- | ---
email | string | Yes
password | string | Yes

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMGFhNTExNzBhZTE4MDAwNDMzMzkzNyIsImlhdCI6MTU5NDUzMzMxMSwiZXhwIjoxNTk0NjE5NzExfQ.lxBXpMBLkrm5_exY8_rx3zmpgNcJ_JAkUC6NZPXDt5o"
}
```

## School

### Create a new school
POST https://ppeserver.herokuapp.com/api/school

**Request Body Parameters**

Name | Data Type | Required
--- | ---- | ---
name | string | Yes
address | string | Yes
gradeLevel | string | Yes
description | string | Yes
numberOfStudents | number | No
ppeNeed | array | No


```
{
    "data": {
        "numberOfStudents": 300,
        "ppeNeed": [],
        "_id": "5f0aa6b770ae180004333938",
        "name": "Fun School",
        "address": "29542 Rippin Viaduct",
        "gradeLevel": "k-12",
        "description": "We need more masks",
        "__v": 0
    }
}
```

### Find all schools
GET https://ppeserver.herokuapp.com/api/school

```
{
    "data": [
        {
            "numberOfStudents": 300,
            "ppeNeed": [],
            "_id": "5f0aa6b770ae180004333938",
            "name": "Fun School",
            "address": "29542 Rippin Viaduct",
            "gradeLevel": "k-12",
            "description": "We need more masks",
            "__v": 0
        }
    ],
    "count": 1
}
```

### Find a school by id
GET https://ppeserver.herokuapp.com/api/school/:id

```
{
    "data": {
        "numberOfStudents": 300,
        "ppeNeed": [],
        "_id": "5f0aa6b770ae180004333938",
        "name": "Fun School",
        "address": "29542 Rippin Viaduct",
        "gradeLevel": "k-12",
        "description": "We need more masks",
        "__v": 0
    }
}
```