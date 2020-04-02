
<h1 align="center">Backend</h1>
<p align="center">A RESTful API to store and organize info about ONGs and their incidents.</p>

### Built With

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [Knex](http://knexjs.org/)
- [Nodemon](https://nodemon.io/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://www.npmjs.com/package/supertest)
- [Celebrate](https://www.npmjs.com/package/celebrate)
- [Cors](https://www.npmjs.com/package/cors)

## Setup

### Prerequisites

```
Node
```

### Installing

Clone the project:
```
git clone https://github.com/Lukazovic/Be-The-Hero.git
```

Go into the project root folder:
```
cd Be-The-Hero
```

Install the projects modules:
```
npm install
```

### Running Tests
```
npm test
```

### Starting the API

To run the API (in the project folder):
```
npm start
```

> Access in: http://localhost:3333/

## All Endpoints

### ONG Endpoints:

- POST: `/ongs` - Create new ONG
- GET : `/ongs` - Get all ONGs
- GET : `/profile` - Get all incidents by a specific ONG
- POST: `/sessions` - ONG login

### Incidents Endpoints:

- POST: `/incidents` - Create new Incident for a ONG
- GET : `/incidents` - Get all Incidents
- DELETE : `/incidents/<id>` - Delete a Incident for a ONG

## How to use ONGs API Endpoints

### Create new ONG

#### Method:

- POST: `/ongs`

#### URL Example

> [http://localhost:3333/ongs](http://localhost:3333/ongs)

#### Paramethers

|   Paramether   |       Description    |     Type     |
| :------------: | :------------------: | :----------: |
|      name      |   ONG's name         |    String    |
|      email     |   ONG's email        |    String    |
|    whatsapp    |   ONG's Whatsapp     |    Number    |
|      city      |   ONG's city         |    String    |
|       uf       |   ONG's short state  |    String    |

##### JSON request body example:

```json
{
	"name": "ONG name",
	"email": "ong@email.com",
	"whatsapp": "0012345678",
	"city": "São Paulo",
	"uf": "SP"
}
```

##### Response example:

```json
{
    "id": "e4446c37"
```

> Observation: As response you will receive a ID so you will be able to use it to authenticate the ONG when it needed.

### Get all ONGs

#### Method:

- GET: `/ongs`

#### URL Example

> [http://localhost:3333/ongs](http://localhost:3333/ongs)

### Get all incidents by a specific ONG

#### Method:

- GET: `/profile`

#### URL Example

> [http://localhost:3333/profile](http://localhost:3333/profile)

#### Paramethers

|   Paramether   |       Description    |     Type      |   Required   |
| :------------: | :------------------: | :-----------: | :----------: |
|  Authorization |   Session user's ID  | Authorization |     True     |

### ONG login

#### Method:

- POST: `/sessions`

#### URL Example

> [http://localhost:3333/sessions](http://localhost:3333/sessions)

#### Paramethers

|   Paramether   |       Description    |     Type     |   Required   |
| :------------: | :------------------: | :----------: | :----------: |
|       id       |         ONG ID       |     String   |     True     |
