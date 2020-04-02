
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
}
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

|   Paramether   |       Description    |     Type      |
| :------------: | :------------------: | :-----------: |
|  Authorization |   Session user's ID  | Authorization |

### ONG login

#### Method:

- POST: `/sessions`

#### URL Example

> [http://localhost:3333/sessions](http://localhost:3333/sessions)

#### Paramethers

|   Paramether   |       Description    |     Type     |
| :------------: | :------------------: | :----------: |
|       id       |         ONG ID       |     String   |

## How to use Incidents API Endpoints

### Create new Incident for a ONG

#### Method:

- POST: `/incidents`

#### URL Example

> [http://localhost:3333/incidents](http://localhost:3333/incidents)

#### Paramethers

|   Paramether  |        Description       |     Type      |
| :-----------: | :----------------------: | :-----------: |
|     title     |     Incident's title     |    String     |
|  description  |  Incident's description  |    String     |
|     value     |     Incident's value     |    Number     |
| Authorization |     Session user's ID    | Authorization |

##### JSON request body example:

```json
{
	"title": "Title to Help",
	"description": "Details",
	"value": 75
}
```

##### Response example:

```json
{
  "id": 11
}
```

### Get all incidents

#### Method:

- GET: `/incidents`

#### URL Example

> [http://localhost:3333/incidents](http://localhost:3333/incidents)

#### Paramethers

|   Paramether   |       Description    |     Type      |
| :------------: | :------------------: | :-----------: |
|  Authorization |   Session user's ID  | Authorization |

### Delete a Incident for a ONG

#### Method:

- DELETE: `/incidents/<id>`
	- `<id> is the identifier of the ONG`

#### URL Example

> [http://localhost:3333/incidents](http://localhost:3333/incidents)

#### Paramethers

|   Paramether   |       Description    |     Type      |
| :------------: | :------------------: | :-----------: |
|  Authorization |   Session user's ID  | Authorization |
|      id        |         ONG ID       |     String    |

## Author

<table>
  <tr>
    <td align="center"><a href="https://github.com/Lukazovic"><img src="https://avatars0.githubusercontent.com/u/54550926?s=460&u=cdeeac652ce0597a986fbdcff6e249ad27a1f1da&v=4" width="100px;" alt=""/><br /><sub><b>Lucas Vieira</b></sub></a><br /><a href="https://github.com/Lukazovic/be-the-hero" title="Code">💻</a></td>
  <tr>
</table>
