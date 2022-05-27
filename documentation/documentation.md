
# task-backend collection



<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->



## Endpoints

* [users](#users)
    1. [get all users list](#1-get-all-users-list)
    1. [get  full own profile](#2-get--full-own-profile)
    1. [get user info by id](#3-get-user-info-by-id)
    1. [invite user by id](#4-invite-user-by-id)
    1. [approve invitation](#5-approve-invitation)
* [posts](#posts)
    1. [get all posts of user by user id](#1-get-all-posts-of-user-by-user-id)
    1. [get all my posts](#2-get-all-my-posts)
    1. [get post by post id](#3-get-post-by-post-id)
    1. [get all comments of post by post id](#4-get-all-comments-of-post-by-post-id)
    1. [write a post](#5-write-a-post)
    1. [update content of post by post id](#6-update-content-of-post-by-post-id)
    1. [delete post by post id](#7-delete-post-by-post-id)
* [auth](#auth)
    1. [register](#1-register)
    1. [login](#2-login)
* [comments](#comments)
    1. [get all comments of user by user id](#1-get-all-comments-of-user-by-user-id)
    1. [get all my comments](#2-get-all-my-comments)
    1. [get comment by comment id](#3-get-comment-by-comment-id)
    1. [write a comment for post by post id](#4-write-a-comment-for-post-by-post-id)
    1. [update content of comment by comment id](#5-update-content-of-comment-by-comment-id)
    1. [delete comment by comment id](#6-delete-comment-by-comment-id)

--------



## users



### 1. get all users list



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



### 2. get  full own profile



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



### 3. get user info by id



***Endpoint:***

```bash
Method: GET
Type: 
URL: http://{{URL}}/api/users/{{userId}}
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{auth_token}} |  |



### 4. invite user by id



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



### 5. approve invitation



***Endpoint:***

```bash
Method: PUT
Type: 
URL: http://{{URL}}/api/users/{{otherUserId}}/approve
```


***Headers:***

| Key | Value | Description |
| --- | ------|-------------|
| Content-Type | application/json |  |
| Authorization | Bearer {{other_auth_token}} |  |



## posts



### 1. get all posts of user by user id



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



### 2. get all my posts



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



### 3. get post by post id



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



### 4. get all comments of post by post id



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



### 5. write a post



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



### 6. update content of post by post id



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



### 7. delete post by post id



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



## auth



### 1. register



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



### 2. login



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



## comments



### 1. get all comments of user by user id



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



### 2. get all my comments



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



### 3. get comment by comment id



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



### 4. write a comment for post by post id



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



### 5. update content of comment by comment id



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



### 6. delete comment by comment id



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



---
[Back to top](#task-backend-collection)

>Generated at 2022-05-27 11:39:46 by [docgen](https://github.com/thedevsaddam/docgen)
