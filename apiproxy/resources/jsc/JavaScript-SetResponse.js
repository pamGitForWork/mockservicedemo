var requestPath = context.getVariable("request.path");
var accountId = Number(context.getVariable("request.header.accountId"));
var creditCardNo = Number(context.getVariable("request.header.creditCardNo"));
var insuranceId = Number(context.getVariable("request.header.insuranceId"));
var statusCode = 200;
var response = null;

if (requestPath == "/mock/v1/bank/account") {
    
    
    switch(accountId) {
        case 1001:
            response = '{"status":"ok","result":{"id":1001,"accountName":"JOHN DOE","accountType":"Savings","balance":10001.11}}';
            context.setVariable("request.header.creditCardNo", 1111000022220001);
            context.setVariable("request.header.insuranceId", 100001);
            break;
        case 1002:
            response = '{"id":1002,"accountName":"JOHN SMITH","accountType":"Savings","balance":854.54}';
            context.setVariable("request.header.creditCardNo", 1111000022220002);
            context.setVariable("request.header.insuranceId", 100002);
            break;
        case 1003:
            response = '{"id":1003,"accountName":"JUAN DELA CRUZ","accountType":"Savings","balance":567.21}';
            break;
        case 1004:
            response = '{"id":1004,"accountName":"KLEIN MORETTI","accountType":"Savings","balance":888.88}';
            break;
        case 1005:
            response = '{"id":1005,"accountName":"LUCIEN EVANS","accountType":"Savings","balance":120120.12}';
            break;
        default:
            response = '{"errorMessage":"Account ID not found"}';
            statusCode = 400;
    }
    } else if (requestPath == "/mock/v1/creditcard/account") {
        if(accountId !== null) {
            switch(accountId) {
                case 1001:
                    creditCardNo = 1111000022220001;
                    break;
                case 1002:
                    creditCardNo = 1111000022220002;
                    break;
                case 1003:
                    creditCardNo = 1111000022220003;
                    break;
                case 1004:
                    creditCardNo = 1111000022220004;
                    break;
                case 1005:
                    creditCardNo = 1111000022220005;
                    break;
            }
        }
        
        switch(creditCardNo) {
            case 1111000022220001:
                response = '{"id":1111000022220001,"creditLimit":10000.00,"balance":111.11}';
                break;
            case 1111000022220002:
                response = '{"id":1111000022220001,"creditLimit":20000.00,"balance":222.22}';
                break;
            case 1111000022220003:
                response = '{"id":1111000022220001,"creditLimit":30000.00,"balance":333.33}';
                break;
            case 1111000022220004:
                response = '{"id":1111000022220001,"creditLimit":40000.00,"balance":444.44}';
                break;
            case 1111000022220005:
                response = '{"id":1111000022220001,"creditLimit":50000.00,"balance":555.55}';
                break;
            default:
                response = '{"errorMessage":"Credit card number not found"}';
                statusCode = 400;
        }
    } else if (requestPath == "/mock/v1/insurance/account") {
        if(accountId !== null) {
            switch(accountId) {
                case 1001:
                    insuranceId = 100001;
                    break;
                case 1002:
                    insuranceId = 100002;
                    break;
                case 1003:
                    insuranceId = 100003;
                    break;
                case 1004:
                    insuranceId = 100004;
                    break;
                case 1005:
                    insuranceId = 100005;
                    break;
            }
        }
        
        switch(insuranceId) {
            case 100001:
                response = '{"id":100001,"insuranceType":"Life","balance":111.11}';
                break;
            case 100002:
                response = '{"id":100002,"insuranceType":"Life","balance":222.22}';
                break;
            case 100003:
                response = '{"id":100003,"insuranceType":"Life","balance":333.33}';
                break;
            case 100004:
                response = '{"id":100004,"insuranceType":"Life","balance":444.44}';
                break;
            case 100005:
                response = '{"id":100005,"insuranceType":"Life","balance":555.55}';
                break;
            default:
                response = '{"errorMessage":"Insurance ID not found"}';
                statusCode = 400;
        }
    } else if (requestPath == "/mock/v1/financials") {
        switch(accountId) {
            case 1001:
                response = '{"accountId":1001,"accountName":"JOHN DOE","accountType":"Savings","accountBalance":12345.67,"creditCardNo":1111000022220001,"creditLimit":10000.0,"creditCardBalance":111.11,"insuranceId":100001,"insuranceType":"Life","insuranceBalance":111.11}';
                break;
            case 1002:
                response = '{"accountId":1002,"accountName":"JOHN SMITH","accountType":"Savings","accountBalance":854.54,"creditCardNo":1111000022220002,"creditLimit":20000.0,"creditCardBalance":222.22,"insuranceId":100002,"insuranceType":"Life","insuranceBalance":222.22}';
                break;
            case 1003:
                response = '{"accountId":1003,"accountName":"JUAN DELA CRUZ","accountType":"Savings","accountBalance":600.21,"creditCardNo":1111000022220003,"creditLimit":30000.0,"creditCardBalance":333.33,"insuranceId":100003,"insuranceType":"Life","insuranceBalance":333.33}';
                break;
            case 1004:
                response = '{"accountId":1004,"accountName":"KLEIN MORETTI","accountType":"Savings","accountBalance":888.88,"creditCardNo":1111000022220004,"creditLimit":40000.0,"creditCardBalance":444.44,"insuranceId":100004,"insuranceType":"Life","insuranceBalance":444.44}';
                break;
            case 1005:
                response = '{"accountId":1005,"accountName":"LUCIEN EVANS","accountType":"Savings","accountBalance":120120.12,"creditCardNo":1111000022220005,"creditLimit":50000.0,"creditCardBalance":555.55,"insuranceId":100005,"insuranceType":"Life","insuranceBalance":555.55}';
                break;
            default:
                response = '{"errorMessage":"Account ID not found"}';
                statusCode = 400;
        }
    }

context.setVariable("var.statusCode", statusCode);
context.setVariable("var.response", response);