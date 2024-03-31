# User Info Logger
![NPM Downloads](https://img.shields.io/npm/dt/user-info-logger?style=plastic&logo=npm)
![NPM Version](https://img.shields.io/npm/v/user-info-logger)

User Info Logger is a Blazingly fast Client-side utility library for javascript that collects information about the user's IP address, geolocation, and system information.
It helps developer understand the client.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Properties](/PROPERTIES.md)
- [License](#license)
- [Demo](https://github.com/IntegerAlex/user-info-logger-demo)
- [Preview](https://user-info-logger-demo.vercel.app/)

## Installation

To install User Info Logger, you can use npm:

```bash
npm install user-info-logger
```

## Usage

Add this Snippet in Frontend code
and export data anywhere you want.
onconsole or send it to your backend server.

```javascript
import userInfo from 'user-info-logger'
const data = userInfo()
```

For a detailed breakdown of the properties included in the returned data, refer to the [Properties](/PROPERTIES.md) file.

## License

This project is licensed under the GPL V3 license. You're free to use, modify, and distribute this software under the terms of this license.
