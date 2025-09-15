<template><h1>Admin Form</h1>
        <form action="/postAdmin" enctype="multipart/form-data" method="post">
            <label for="adminId">Admin ID</label>
            <input type="text" name="adminId" id="adminId">

            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName">

            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName">

            <label for="department">Department</label>
            <input type="text" name="department" id="department">

            <label for="file">Select File:</label>
            <input type="file" name="file" id="file">
            <br>
            <input type="submit" value="Submit">
        </form></template>

<script>

</script>

<style scoped>
* {
                margin: 0;
                padding: 0;
            }
            body {
                font-family: Arial, Helvetica, sans-serif;
                background: #fed4ce;
            }

            h1 {
                text-align: center;
                margin-top: 4em;
            }

            form {
                border: 3px solid #a91f00;
                box-shadow: 5px 5px 15px #380903;
                background: #ffffff;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 30vh;
                margin: 1em auto;
                padding: 1em;
            }

            label {
                padding-top: 1em;
            }

            input[type=submit] {
                margin: 1em 0;
                padding: 0.25em 0.5em;
                border-radius: 5px;
                border: 1px solid #a91f00;
            }

            input[type=submit]:hover {
                color: #fff;
                background-color: #a91f00;
                transition: 300ms ease-in-out;
            }</style>