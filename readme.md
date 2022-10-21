# Documentation

## 1. API

**Base url**: https://dogs-api-group-project-1.herokuapp.com

**GET** /dogs

_Query parameters_:

1. gender: `String` (optional)

   Available values: `'male'`, `'female'`

2. size: `String` (optional)

   Available values: `'1small'`, `'2medium'`, `'3large'`

3. name: `String` (optional)

   Available values: `Any string`,

4. page: `Number` (optional)

   Available values: `1 - ∞`

   Default value: `1`

5. sort: `String` (optional)

   Available values: `'name'`, `'size'`

   Default value: `'name'`

_Response success_:

```
{
  records: Array<{
    _id: ObjectId,
    name: String,
    gender: String,
    size: String,
    image: String,
    __v: Int32
  }>,
  totalCount: Number,
  success: Boolean
}
```

_Response error_:

```
{
  error: ErrorObject,
  success: Boolean
}
```

## 2. Requirements

1. Navbar must stay on top of the page when scrolling down
2. Filters bar in desktop view must stay on top of the page when scrolling down after reaching proper depth (resource no. 1)
3. Implement your own version of open hamburger menu in mobile view
4. Implement your own version of open filter menu in mobile view
5. Implement your own version of open cart in mobile view & desktop view
6. Use clip content feature in Figma to reveal whole asset
7. Work in scrum (resource no. 2)

## 3. Resources

1. Position: sticky explained https://elad.medium.com/css-position-sticky-how-it-really-works-54cd01dc2d46
2. What is scrum https://www.youtube.com/watch?v=2Vt7Ik8Ublw
