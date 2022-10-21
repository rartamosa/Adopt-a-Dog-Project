# Documentation

## 1. API

**Base url**: https://dogs-api-sprint-4.herokuapp.com

**GET** /dogs

_Query parameters_:

1. color: `String` (optional)

   Available values: `'red'`, `'apricot'`, `'black'`, `'white'`, `'silver'`, `'tan'`,

2. gender: `String` (optional)

   Available values: `'male'`, `'female'`

3. size: `String` (optional)

   Available values: `'small'`, `'medium'`, `'large'`

4. page: `Number` (optional)

   Available values: `1 - ∞`

   Default value: `1`

5. sort: `String` (optional)

   Available values: `'name'`, `'color'`

   Default value: `'name'`

_Response success_:

```
{
  records: Array<{
    _id: ObjectId,
    name: String,
    color: String,
    gender: String,
    size: String,
    image: String,
    __v: Number
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
2. Filters bar in desktop view must stay on top of the page when scrolling down after reaching proper depth (https://elad.medium.com/css-position-sticky-how-it-really-works-54cd01dc2d46)
3. Implement your own version of open hamburger menu in mobile view
4. Implement your own version of open filter menu in mobile view
5. Implement your own version of open cart in mobile view & desktop view
6. Use clip content feature in Figma to reveal whole asset
