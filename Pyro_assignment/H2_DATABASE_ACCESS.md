# H2 Database Access

## H2 Console (Web Interface)

Access the H2 database console at: **http://localhost:8080/h2-console**

### Connection Settings:
- **JDBC URL**: `jdbc:h2:mem:testdb`
- **Username**: `sa`
- **Password**: (leave empty)
- **Driver Class**: `org.h2.Driver`

## Viewing Todos in Database

Once connected, run this SQL query to see all todos:

```sql
SELECT * FROM TODOS;
```

## Useful SQL Queries

### View all todos with details:
```sql
SELECT ID, TITLE, DESCRIPTION, COMPLETED, CREATED_AT 
FROM TODOS 
ORDER BY CREATED_AT DESC;
```

### View only completed todos:
```sql
SELECT * FROM TODOS WHERE COMPLETED = TRUE;
```

### View only pending todos:
```sql
SELECT * FROM TODOS WHERE COMPLETED = FALSE;
```

### Count total todos:
```sql
SELECT COUNT(*) AS TOTAL_TODOS FROM TODOS;
```

## REST API Endpoints (JSON Format)

You can also view the data in JSON format via REST API:

### Get all todos:
```
GET http://localhost:8080/api/todos
```

### Get completed todos:
```
GET http://localhost:8080/api/todos?completed=true
```

### Get pending todos:
```
GET http://localhost:8080/api/todos?completed=false
```

### Get specific todo by ID:
```
GET http://localhost:8080/api/todos/1
```

## Testing with Browser or Postman

Simply paste any of the GET URLs above into your browser or Postman to see the JSON response.

**Example**: http://localhost:8080/api/todos will return all todos in JSON format like:
```json
[
  {
    "id": 1,
    "title": "Learn Spring Boot",
    "description": "Complete the tutorial",
    "completed": false,
    "createdAt": "2026-02-18T00:08:30.123456"
  }
]
```
