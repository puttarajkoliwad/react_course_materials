# OpenapiClient::DefaultApi

All URIs are relative to *http://localhost:3000*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**classifications_check**](DefaultApi.md#classifications_check) | **GET** /check/{data} |  |
| [**classifications_create_new**](DefaultApi.md#classifications_create_new) | **POST** /classifications |  |
| [**classifications_show**](DefaultApi.md#classifications_show) | **GET** /check |  |


## classifications_check

> classifications_check(data)



Checks if the given data is good or bad

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
data = 'data_example' # String | Data to be checked

begin
  
  api_instance.classifications_check(data)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->classifications_check: #{e}"
end
```

#### Using the classifications_check_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> classifications_check_with_http_info(data)

```ruby
begin
  
  data, status_code, headers = api_instance.classifications_check_with_http_info(data)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->classifications_check_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **data** | **String** | Data to be checked |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## classifications_create_new

> classifications_create_new(classifications_create_new_request)



Create a classification

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
classifications_create_new_request = OpenapiClient::ClassificationsCreateNewRequest.new({data: 'data_example'}) # ClassificationsCreateNewRequest | 

begin
  
  api_instance.classifications_create_new(classifications_create_new_request)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->classifications_create_new: #{e}"
end
```

#### Using the classifications_create_new_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> classifications_create_new_with_http_info(classifications_create_new_request)

```ruby
begin
  
  data, status_code, headers = api_instance.classifications_create_new_with_http_info(classifications_create_new_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->classifications_create_new_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **classifications_create_new_request** | [**ClassificationsCreateNewRequest**](ClassificationsCreateNewRequest.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## classifications_show

> classifications_show(classification)



Checks if the given data is good or bad

### Examples

```ruby
require 'time'
require 'openapi_client'

api_instance = OpenapiClient::DefaultApi.new
classification = OpenapiClient::Classification.new # Classification | 

begin
  
  api_instance.classifications_show(classification)
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->classifications_show: #{e}"
end
```

#### Using the classifications_show_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> classifications_show_with_http_info(classification)

```ruby
begin
  
  data, status_code, headers = api_instance.classifications_show_with_http_info(classification)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue OpenapiClient::ApiError => e
  puts "Error when calling DefaultApi->classifications_show_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **classification** | [**Classification**](Classification.md) |  |  |

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

