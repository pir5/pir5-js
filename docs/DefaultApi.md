# PdnsApi.DefaultApi

All URIs are relative to *http://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsGet**](DefaultApi.md#domainsGet) | **GET** /domains | get domains
[**domainsNameDelete**](DefaultApi.md#domainsNameDelete) | **DELETE** /domains/{name} | delete domain
[**domainsNamePut**](DefaultApi.md#domainsNamePut) | **PUT** /domains/{name} | update domain
[**domainsPost**](DefaultApi.md#domainsPost) | **POST** /domains | create domain
[**recordsDisableIdPut**](DefaultApi.md#recordsDisableIdPut) | **PUT** /records/disable/{id} | disable record
[**recordsEnableIdPut**](DefaultApi.md#recordsEnableIdPut) | **PUT** /records/enable/{id} | enable record
[**recordsGet**](DefaultApi.md#recordsGet) | **GET** /records | get records
[**recordsIdDelete**](DefaultApi.md#recordsIdDelete) | **DELETE** /records/{id} | delete record
[**recordsIdPut**](DefaultApi.md#recordsIdPut) | **PUT** /records/{id} | update record
[**recordsPost**](DefaultApi.md#recordsPost) | **POST** /records | create record



## domainsGet

> [ModelDomain] domainsGet(opts)

get domains

get domains

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let opts = {
  'id': 56, // Number | Domain ID
  'name': "name_example" // String | Name
};
apiInstance.domainsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Domain ID | [optional] 
 **name** | **String**| Name | [optional] 

### Return type

[**[ModelDomain]**](ModelDomain.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsNameDelete

> ModelDomain domainsNameDelete(name)

delete domain

delete domain

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let name = "name_example"; // String | Domain Name
apiInstance.domainsNameDelete(name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Domain Name | 

### Return type

[**ModelDomain**](ModelDomain.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## domainsNamePut

> ModelDomain domainsNamePut(name, domain)

update domain

update domain

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let name = "name_example"; // String | Dorain Name
let domain = new PdnsApi.ModelDomain(); // ModelDomain | Domain Object
apiInstance.domainsNamePut(name, domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Dorain Name | 
 **domain** | [**ModelDomain**](ModelDomain.md)| Domain Object | 

### Return type

[**ModelDomain**](ModelDomain.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## domainsPost

> ModelDomain domainsPost(domain)

create domain

create domain

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let domain = new PdnsApi.ModelDomain(); // ModelDomain | Domain Object
apiInstance.domainsPost(domain, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | [**ModelDomain**](ModelDomain.md)| Domain Object | 

### Return type

[**ModelDomain**](ModelDomain.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recordsDisableIdPut

> ModelRecord recordsDisableIdPut(id, record)

disable record

disable record

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let id = 56; // Number | Record ID 
let record = new PdnsApi.ModelRecord(); // ModelRecord | Record Object
apiInstance.recordsDisableIdPut(id, record, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Record ID  | 
 **record** | [**ModelRecord**](ModelRecord.md)| Record Object | 

### Return type

[**ModelRecord**](ModelRecord.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recordsEnableIdPut

> ModelRecord recordsEnableIdPut(id, record)

enable record

enable record

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let id = 56; // Number | Record ID 
let record = new PdnsApi.ModelRecord(); // ModelRecord | Record Object
apiInstance.recordsEnableIdPut(id, record, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Record ID  | 
 **record** | [**ModelRecord**](ModelRecord.md)| Record Object | 

### Return type

[**ModelRecord**](ModelRecord.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recordsGet

> [ModelRecord] recordsGet(opts)

get records

get records

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let opts = {
  'id': 56, // Number | Record ID
  'domainId': 56 // Number | Domain ID
};
apiInstance.recordsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Record ID | [optional] 
 **domainId** | **Number**| Domain ID | [optional] 

### Return type

[**[ModelRecord]**](ModelRecord.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordsIdDelete

> ModelRecord recordsIdDelete(id)

delete record

delete record

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let id = 56; // Number | Record ID 
apiInstance.recordsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Record ID  | 

### Return type

[**ModelRecord**](ModelRecord.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## recordsIdPut

> ModelRecord recordsIdPut(id, record)

update record

update record

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let id = 56; // Number | Record ID 
let record = new PdnsApi.ModelRecord(); // ModelRecord | Record Object
apiInstance.recordsIdPut(id, record, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Record ID  | 
 **record** | [**ModelRecord**](ModelRecord.md)| Record Object | 

### Return type

[**ModelRecord**](ModelRecord.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## recordsPost

> ModelRecord recordsPost(record)

create record

create record

### Example

```javascript
import PdnsApi from 'pdns_api';
let defaultClient = PdnsApi.ApiClient.instance;
// Configure API key authorization: ID
let ID = defaultClient.authentications['ID'];
ID.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ID.apiKeyPrefix = 'Token';

let apiInstance = new PdnsApi.DefaultApi();
let record = new PdnsApi.ModelRecord(); // ModelRecord | Record Object
apiInstance.recordsPost(record, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **record** | [**ModelRecord**](ModelRecord.md)| Record Object | 

### Return type

[**ModelRecord**](ModelRecord.md)

### Authorization

[ID](../README.md#ID)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

