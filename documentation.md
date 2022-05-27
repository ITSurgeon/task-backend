
# task-backend collection



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
1. [http://{{URL}}/api/comments/{{commentId}}](#1-httpurlapicommentscommentid)
1. [http://{{URL}}/api/comments/{{commentId}}](#2-httpurlapicommentscommentid)
1. [http://{{URL}}/api/comments/{{commentId}}](#3-httpurlapicommentscommentid)
1. [http://{{URL}}/api/comments](#4-httpurlapicomments)
1. [http://{{URL}}/api/posts/{{postId}}/comments](#5-httpurlapipostspostidcomments)
1. [http://{{URL}}/api/posts/{{postId}}/comments](#6-httpurlapipostspostidcomments)
1. [http://{{URL}}/api/posts/{{postId}}](#7-httpurlapipostspostid)
1. [http://{{URL}}/api/posts/](#8-httpurlapiposts)
1. [http://{{URL}}/api/posts](#9-httpurlapiposts)
1. [http://{{URL}}/api/users/{{otherUserId}}/comments](#10-httpurlapiusersotheruseridcomments)
1. [http://{{URL}}/api/users/{{otherUserId}}/posts](#11-httpurlapiusersotheruseridposts)
1. [http://{{URL}}/api/users/{{userId}}/approve](#12-httpurlapiusersuseridapprove)
1. [http://{{URL}}/api/users/{{otherUserId}}/invite](#13-httpurlapiusersotheruseridinvite)
1. [http://{{URL}}/api/users/{{otherUserId}}](#14-httpurlapiusersotheruserid)
1. [http://{{URL}}/api/users/own/profile](#15-httpurlapiusersownprofile)
1. [http://{{URL}}/api/users/](#16-httpurlapiusers)
1. [http://{{URL}}/api/auth/login](#17-httpurlapiauthlogin)
1. [http://{{URL}}/api/auth/register](#18-httpurlapiauthregister)



## Endpoints


--------



### 1. http://{{URL}}/api/comments/{{commentId}}



***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://{{URL}}/api/comments/{{commentId}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 2. http://{{URL}}/api/comments/{{commentId}}



***Endpoint:***

```bash
Method: PUT
Type: RAW
URL: http://{{URL}}/api/comments/{{commentId}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



***Body:***

```js        
{
          "content": "changed_content_1"
        }
```



### 3. http://{{URL}}/api/comments/{{commentId}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/comments/{{commentId}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 4. http://{{URL}}/api/comments



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/comments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 5. http://{{URL}}/api/posts/{{postId}}/comments



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://{{URL}}/api/posts/{{postId}}/comments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



***Body:***

```js        
{
          "content": "some_post_comment_7"
        }
```



### 6. http://{{URL}}/api/posts/{{postId}}/comments



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/posts/{{postId}}/comments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 7. http://{{URL}}/api/posts/{{postId}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/posts/{{postId}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 8. http://{{URL}}/api/posts/



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/posts/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 9. http://{{URL}}/api/posts



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://{{URL}}/api/posts
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



***Body:***

```js        
{
          "content": "some_post_content_7"
        }
```



### 10. http://{{URL}}/api/users/{{otherUserId}}/comments



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/users/{{otherUserId}}/comments
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 11. http://{{URL}}/api/users/{{otherUserId}}/posts



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/users/{{otherUserId}}/posts
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 12. http://{{URL}}/api/users/{{userId}}/approve



***Endpoint:***

```bash
Method: PUT
Type: 
URL: http://{{URL}}/api/users/{{userId}}/approve
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{other_auth_token}} |  |



### 13. http://{{URL}}/api/users/{{otherUserId}}/invite



***Endpoint:***

```bash
Method: PUT
Type: 
URL: http://{{URL}}/api/users/{{otherUserId}}/invite
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 14. http://{{URL}}/api/users/{{otherUserId}}



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/users/{{otherUserId}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 15. http://{{URL}}/api/users/own/profile



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/users/own/profile
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 16. http://{{URL}}/api/users/



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/users/
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 17. http://{{URL}}/api/auth/login



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://{{URL}}/api/auth/login
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
          "login": "login_1",
          "password": "another_password"
        }
```



### 18. http://{{URL}}/api/auth/register



***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://{{URL}}/api/auth/register
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |



***Body:***

```js        
{
          "login": "login_1",
          "password": "some_password"
        }
```



---
[Back to top](#task-backend-collection)

>Generated at 2022-05-27 09:41:22 by [docgen](https://github.com/thedevsaddam/docgen)
