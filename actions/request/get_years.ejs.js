<%-
Lucy.request({
  domain: 'api.edmunds.com',
  path: {join: ['api/vehicle/v2/', {answer: 'make'}, '/', {answer: 'model'}]},
  query: {
    fmt: 'json',
    api_key: {answer: 'api_key'}
  }
})
%>
