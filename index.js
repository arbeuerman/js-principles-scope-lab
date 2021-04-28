// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "george"
var bestCustomer;

function upperCaseCustomerName()
{
    customerName = customerName.toUpperCase();
    // return upperCasedName;
}

function setBestCustomer()
{
    bestCustomer = 'not bob';
}

function overwriteBestCustomer()
{
    bestCustomer = "maybe bob";
    return bestCustomer;
}

function changeLeastFavoriteCustomer()
{
    leastFavoriteCustomer = "lori"
    return leastFavoriteCustomer;
}