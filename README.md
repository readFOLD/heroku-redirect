This has come in handy more times than it should have. 

## Configuration
To redirect all requests to example.com:

```
heroku config:add NEW_BASE_URL=http://example.com
```

You can also choose which redirect status code to use

```
heroku config:add STATUS_CODE=302
```
