---
id: states-by-country
title: Get a list of States within country
sidebar_label: States By Country
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">GET</Highlight> https://api.countrystatecity.in/v1/countries/[ciso]/states

## Security
This api use API KEY as an authentication method.
* Name: <Highlight color="#1877F2">X-CSCAPI-KEY</Highlight>
* In: header

## Request Parameters
| Name | Located in | Description | Required | Type |
| ---- | ---------- | ----------- | -------- | ---- |
| [ciso] | URL | ISO2 Code of Country | <Highlight color="#d73232">Required</Highlight> | string |

## Response
| Code | Description |
| ---- | ----------- |
| 200 | Return a list of states |
| 401 | Unauthorized. |
| 404 | Not Found. |

## Example Usage
<Tabs>
  <TabItem value="js" label="Javascript" default>

   ```jsx title="countries-states-cities.js"
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

  </TabItem>

  <TabItem value="php" label="PHP">

```php title="countries-states-cities.php"
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.countrystatecity.in/v1/countries/IN/states',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => array(
    'X-CSCAPI-KEY: API_KEY'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

  </TabItem>

  <TabItem value="py" label="Python">

```py title="countries-states-cities.py"
import requests

url = "https://api.countrystatecity.in/v1/countries/IN/states"

headers = {
  'X-CSCAPI-KEY': 'API_KEY'
}

response = requests.request("GET", url, headers=headers)

print(response.text)
```

  </TabItem>
</Tabs>

## Example Success Response
```json
[
  {
    "id": 4008,
    "name": "Maharashtra",
    "iso2": "MH"
  },
  ...
]
```

## Example Error Response
```json
{
  "error'": "Unauthorized. You shouldn't be here."
}
```

## Example Not Found Response
```json
{
  "error'": "No States/Regions found."
}
```
