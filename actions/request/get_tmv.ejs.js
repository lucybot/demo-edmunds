<%-
Lucy.request({
  domain: 'api.edmunds.com',
  path: 'api/vehicle/v2/tmvservice/calculateusedtmv',
  query: {
    fmt: 'json',
    api_key: {answer: 'api_key'},
    styleid: {answer: 'styleid'},
    condition: {answer: 'condition'},
    mileage: {answer: 'mileage'},
    zip: {answer: 'zip'}
  }
})
%>
